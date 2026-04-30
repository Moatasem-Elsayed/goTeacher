// GoTeacher — State Store (IndexedDB + reactive)
const DB_NAME = 'goteacher';
const DB_VERSION = 1;
const STORE_NAME = 'progress';
let db = null;
const listeners = new Set();

const defaultState = {
  xp: 0,
  level: 1,
  streak: { current: 0, longest: 0, lastDate: null },
  lessons: {},
  quizzes: {},
  achievements: [],
  totalTime: 0,
  settings: { theme: 'dark' }
};

let state = { ...defaultState };

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE_NAME);
    req.onsuccess = () => { db = req.result; resolve(db); };
    req.onerror = () => reject(req.error);
  });
}

async function loadState() {
  if (!db) await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get('state');
    req.onsuccess = () => {
      if (req.result) state = { ...defaultState, ...req.result };
      resolve(state);
    };
    req.onerror = () => resolve(state);
  });
}

async function saveState() {
  if (!db) await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(state, 'state');
    tx.oncomplete = () => resolve();
  });
}

function notify() {
  listeners.forEach(fn => fn(state));
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getState() { return state; }

export async function init() {
  try {
    await Promise.race([
      loadState(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('DB timeout')), 2000))
    ]);
  } catch (e) {
    console.warn('IndexedDB unavailable, using in-memory state:', e.message);
  }
  checkStreak();
  notify();
  return state;
}

function checkStreak() {
  const today = new Date().toISOString().split('T')[0];
  const last = state.streak.lastDate;
  if (!last) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (last !== today && last !== yesterday) {
    state.streak.current = 0;
  }
}

export async function addXP(amount, source = '') {
  state.xp += amount;
  const newLevel = Math.floor(state.xp / 500) + 1;
  const leveledUp = newLevel > state.level;
  state.level = newLevel;
  await saveState();
  notify();
  return { leveledUp, newLevel };
}

export async function completeLesson(lessonId) {
  if (state.lessons[lessonId]?.status === 'completed') return false;
  state.lessons[lessonId] = {
    ...state.lessons[lessonId],
    status: 'completed',
    completedAt: new Date().toISOString()
  };
  updateStreak();
  await saveState();
  notify();
  return true;
}

export async function saveLessonCode(lessonId, code) {
  state.lessons[lessonId] = {
    ...state.lessons[lessonId],
    lastCode: code,
    status: state.lessons[lessonId]?.status || 'in-progress'
  };
  await saveState();
}

export async function saveQuizScore(quizId, score, total) {
  const prev = state.quizzes[quizId];
  state.quizzes[quizId] = {
    bestScore: Math.max(score, prev?.bestScore || 0),
    totalQuestions: total,
    attempts: (prev?.attempts || 0) + 1
  };
  await saveState();
  notify();
}

function updateStreak() {
  const today = new Date().toISOString().split('T')[0];
  if (state.streak.lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (state.streak.lastDate === yesterday || !state.streak.lastDate) {
    state.streak.current++;
  } else {
    state.streak.current = 1;
  }
  state.streak.longest = Math.max(state.streak.longest, state.streak.current);
  state.streak.lastDate = today;
}

export function getLessonStatus(lessonId) {
  return state.lessons[lessonId]?.status || 'not-started';
}

export function getLessonCode(lessonId) {
  return state.lessons[lessonId]?.lastCode || null;
}

export function getChapterProgress(chapterLessons) {
  const completed = chapterLessons.filter(id => state.lessons[id]?.status === 'completed').length;
  return { completed, total: chapterLessons.length, percent: Math.round((completed / chapterLessons.length) * 100) };
}

export function getTotalCompleted() {
  return Object.values(state.lessons).filter(l => l.status === 'completed').length;
}

export async function unlockAchievement(id) {
  if (state.achievements.includes(id)) return false;
  state.achievements.push(id);
  await saveState();
  notify();
  return true;
}

export async function setTheme(theme) {
  state.settings.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  await saveState();
}
