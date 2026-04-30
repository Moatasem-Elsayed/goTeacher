// GoTeacher — Home Page
import { chapters } from '../data/curriculum.js';
import { getState, getChapterProgress, getTotalCompleted } from '../store.js';
import { navigate } from '../router.js';
import { renderNavbar } from '../components/Navbar.js';

function createParticles(count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100, y = Math.random() * 100;
    const dur = 6 + Math.random() * 8;
    const delay = Math.random() * 5;
    const tx = (Math.random() - 0.5) * 150, ty = -50 - Math.random() * 150;
    html += `<div class="particle" style="left:${x}%;top:${y}%;--duration:${dur}s;--delay:${delay}s;--tx:${tx}px;--ty:${ty}px"></div>`;
  }
  return html;
}

export function renderHome(app) {
  const state = getState();
  const totalLessons = chapters.reduce((s, c) => s + c.lessons.length, 0);
  const completed = getTotalCompleted();
  const hasProgress = completed > 0;

  app.innerHTML = '';
  app.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.className = 'main-content full-width home-page page-enter';

  // Hero
  main.innerHTML = `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="particles-container">${createParticles(25)}</div>
      <div class="hero-content">
        <div class="hero-badge"><span class="badge badge-primary">✦ Interactive Learning Platform</span></div>
        <h1 class="hero-title">Master <span class="highlight">Go</span> the<br/>Interactive Way</h1>
        <p class="hero-subtitle">Learn Golang through hands-on lessons, a built-in code compiler, visual animations, quizzes, and gamified progress tracking.</p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" id="hero-start">${hasProgress ? '▶ Continue Learning' : '🚀 Start Learning'}</button>
          <button class="btn btn-secondary btn-lg" id="hero-playground">⌨ Open Playground</button>
        </div>
      </div>
    </section>

    <section style="padding: var(--space-8) var(--space-8) 0">
      <div class="stats-row stagger-children">
        <div class="card card-glass stat-card"><div class="stat-value">${chapters.length}</div><div class="stat-label">Chapters</div></div>
        <div class="card card-glass stat-card"><div class="stat-value">${totalLessons}</div><div class="stat-label">Lessons</div></div>
        <div class="card card-glass stat-card"><div class="stat-value">⭐ ${state.xp}</div><div class="stat-label">XP Earned</div></div>
        <div class="card card-glass stat-card"><div class="stat-value">${Math.round((completed / totalLessons) * 100)}%</div><div class="stat-label">Completed</div></div>
      </div>
    </section>

    <section style="padding: 0 var(--space-8) var(--space-8)">
      <h2 style="font-size:var(--text-2xl);font-weight:var(--weight-bold);margin-bottom:var(--space-6)">📚 Curriculum</h2>
      <div class="chapter-grid stagger-children" id="chapter-grid"></div>
    </section>`;

  const grid = main.querySelector('#chapter-grid');
  chapters.forEach(ch => {
    const lessonIds = ch.lessons.map(l => l.id);
    const progress = getChapterProgress(lessonIds);
    const card = document.createElement('div');
    card.className = 'card card-glow chapter-card';
    card.innerHTML = `
      <div class="chapter-card-header">
        <span class="chapter-number">${String(ch.id).padStart(2, '0')}</span>
        <span style="font-size:var(--text-2xl)">${ch.icon}</span>
      </div>
      <div class="chapter-card-title">${ch.title}</div>
      <div class="chapter-card-desc">${ch.description}</div>
      <div class="chapter-progress-bar"><div class="chapter-progress-fill" style="width:${progress.percent}%"></div></div>
      <div class="chapter-meta"><span>${ch.lessons.length} lessons</span><span>${progress.percent}% complete</span></div>`;
    card.onclick = () => {
      const first = ch.lessons.find(l => l.type !== 'coming-soon');
      if (first) navigate(`/lesson/${ch.id}/${first.id}`);
    };
    grid.appendChild(card);
  });

  main.querySelector('#hero-start').onclick = () => {
    // Find first incomplete lesson
    for (const ch of chapters) {
      for (const l of ch.lessons) {
        if (l.type === 'coming-soon') continue;
        const status = state.lessons[l.id]?.status;
        if (status !== 'completed') { navigate(`/lesson/${ch.id}/${l.id}`); return; }
      }
    }
    navigate('/lesson/1/1.1');
  };
  main.querySelector('#hero-playground').onclick = () => navigate('/playground');

  app.appendChild(main);
}
