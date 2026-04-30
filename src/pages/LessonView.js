// GoTeacher — Lesson View Page
import { getLesson, getChapterForLesson, getNextLesson, getPrevLesson } from '../data/curriculum.js';
import { completeLesson, addXP, getLessonCode, getLessonStatus } from '../store.js';
import { navigate } from '../router.js';
import { renderNavbar } from '../components/Navbar.js';
import { renderSidebar } from '../components/Sidebar.js';
import { renderCodeEditor } from '../components/CodeEditor.js';
import { renderQuiz } from '../components/Quiz.js';
import { showToast } from '../utils/toast.js';
import { marked } from 'marked';

export function renderLessonView(app, params) {
  const { chapterId, lessonId } = params;
  const fullId = `${chapterId}.${lessonId.split('.')[1] || lessonId}`;
  const lesson = getLesson(chapterId, lessonId) || getLesson(chapterId, fullId);
  const chapter = getChapterForLesson(lessonId) || getChapterForLesson(fullId);

  if (!lesson || !chapter) {
    app.innerHTML = `<div style="padding:var(--space-8);text-align:center"><h1>Lesson not found</h1><p>${chapterId} / ${lessonId}</p></div>`;
    return;
  }

  if (lesson.type === 'coming-soon') {
    app.innerHTML = '';
    app.appendChild(renderNavbar());
    app.appendChild(renderSidebar());
    const main = document.createElement('main');
    main.className = 'main-content page-enter';
    main.innerHTML = `<div class="lesson-layout" style="text-align:center;padding-top:var(--space-20)">
      <span style="font-size:4rem">🔒</span>
      <h2>Coming Soon</h2>
      <p style="color:var(--text-muted)">This lesson is under development.</p>
      <button class="btn btn-secondary" style="margin-top:var(--space-4)" onclick="window.location.hash='#/'">← Back to Home</button>
    </div>`;
    app.appendChild(main);
    return;
  }

  app.innerHTML = '';
  app.appendChild(renderNavbar());
  app.appendChild(renderSidebar());

  const main = document.createElement('main');
  main.className = 'main-content page-enter';

  const layout = document.createElement('div');
  layout.className = 'lesson-layout';

  // Header
  layout.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">
        <a href="#/" style="color:var(--color-primary)">Home</a>
        <span class="sep">›</span>
        <span>${chapter.icon} ${chapter.title}</span>
        <span class="sep">›</span>
        <span>${lesson.title}</span>
      </div>
      <h1 class="lesson-title">${lesson.title}</h1>
    </div>`;

  // Quiz type
  if (lesson.type === 'quiz') {
    const quizContainer = document.createElement('div');
    layout.appendChild(quizContainer);
    main.appendChild(layout);
    app.appendChild(main);
    renderQuiz(quizContainer, lesson.quizId);
    addLessonNav(layout, lesson);
    return;
  }

  // Lesson content
  if (lesson.content) {
    const prose = document.createElement('div');
    prose.className = 'lesson-prose animate-fadeIn';
    prose.innerHTML = marked.parse(lesson.content);
    layout.appendChild(prose);
  }

  // Code editor
  if (lesson.code) {
    const editorWrap = document.createElement('div');
    editorWrap.style.marginTop = 'var(--space-4)';
    layout.appendChild(editorWrap);
    setTimeout(() => {
      renderCodeEditor(editorWrap, {
        code: lesson.code,
        lessonId: lesson.id,
        savedCode: getLessonCode(lesson.id)
      });
    }, 50);
  }

  // Q&A
  if (lesson.qa?.length) {
    const qaSection = document.createElement('div');
    qaSection.className = 'qa-panel';
    qaSection.innerHTML = `<h3 class="qa-panel-title">💡 Common Questions</h3>`;
    lesson.qa.forEach(item => {
      const qaItem = document.createElement('div');
      qaItem.className = 'qa-item';
      qaItem.innerHTML = `
        <div class="qa-question"><span>${item.q}</span><span class="qa-chevron">▾</span></div>
        <div class="qa-answer"><div class="qa-answer-content">${item.a}</div></div>`;
      qaItem.querySelector('.qa-question').onclick = () => qaItem.classList.toggle('expanded');
      qaSection.appendChild(qaItem);
    });
    layout.appendChild(qaSection);
  }

  addLessonNav(layout, lesson);
  main.appendChild(layout);
  app.appendChild(main);

  // Keyboard nav
  const handleKey = (e) => {
    if (e.target.closest('.cm-editor')) return;
    const prev = getPrevLesson(lesson.id);
    const next = getNextLesson(lesson.id);
    if (e.key === 'ArrowLeft' && prev) { const ch = getChapterForLesson(prev.id); navigate(`/lesson/${ch.id}/${prev.id}`); }
    if (e.key === 'ArrowRight' && next) { const ch = getChapterForLesson(next.id); navigate(`/lesson/${ch.id}/${next.id}`); }
  };
  document.addEventListener('keydown', handleKey);
  return () => document.removeEventListener('keydown', handleKey);
}

function addLessonNav(layout, lesson) {
  const prev = getPrevLesson(lesson.id);
  const next = getNextLesson(lesson.id);
  const isCompleted = getLessonStatus(lesson.id) === 'completed';

  const nav = document.createElement('div');
  nav.className = 'lesson-nav';
  nav.innerHTML = `
    <div>${prev ? `<button class="btn btn-ghost" id="nav-prev">← ${prev.title}</button>` : '<span></span>'}</div>
    <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" id="btn-complete">${isCompleted ? '✓ Completed' : '✓ Mark Complete'}</button>
    <div>${next ? `<button class="btn btn-ghost" id="nav-next">${next.title} →</button>` : '<span></span>'}</div>`;

  nav.querySelector('#nav-prev')?.addEventListener('click', () => {
    const ch = getChapterForLesson(prev.id);
    navigate(`/lesson/${ch.id}/${prev.id}`);
  });
  nav.querySelector('#nav-next')?.addEventListener('click', () => {
    const ch = getChapterForLesson(next.id);
    if (next.type === 'coming-soon') { showToast('Coming soon!', 'info'); return; }
    navigate(`/lesson/${ch.id}/${next.id}`);
  });
  nav.querySelector('#btn-complete').addEventListener('click', async () => {
    const wasNew = await completeLesson(lesson.id);
    if (wasNew) {
      const { leveledUp } = await addXP(50);
      showToast('+50 XP! Lesson completed! 🎉', 'xp');
      if (leveledUp) showToast('🎉 Level Up!', 'success');
    }
    const btn = nav.querySelector('#btn-complete');
    btn.className = 'btn btn-secondary';
    btn.textContent = '✓ Completed';
  });

  layout.appendChild(nav);
}
