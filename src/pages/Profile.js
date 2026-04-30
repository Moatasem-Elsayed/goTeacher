// GoTeacher — Profile Page
import { renderNavbar } from '../components/Navbar.js';
import { getState, getTotalCompleted } from '../store.js';
import { chapters } from '../data/curriculum.js';
import { achievements } from '../data/achievements.js';

export function renderProfile(app) {
  const state = getState();
  const totalLessons = chapters.reduce((s, c) => s + c.lessons.length, 0);
  const completed = getTotalCompleted();
  const levelNames = ['Newbie', 'Apprentice', 'Coder', 'Developer', 'Gopher', 'Go Master'];
  const levelName = levelNames[Math.min(state.level - 1, levelNames.length - 1)];

  app.innerHTML = '';
  app.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.className = 'main-content full-width profile-page page-enter';
  main.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">🐹</div>
      <h1 style="font-size:var(--text-2xl);font-weight:var(--weight-bold)">Your Profile</h1>
      <div class="profile-level">${levelName} — Level ${state.level}</div>
    </div>
    <div class="stats-row stagger-children">
      <div class="card card-glass stat-card"><div class="stat-value">⭐ ${state.xp}</div><div class="stat-label">Total XP</div></div>
      <div class="card card-glass stat-card"><div class="stat-value">${completed}/${totalLessons}</div><div class="stat-label">Lessons Done</div></div>
      <div class="card card-glass stat-card"><div class="stat-value">🔥 ${state.streak?.current || 0}</div><div class="stat-label">Day Streak</div></div>
      <div class="card card-glass stat-card"><div class="stat-value">${state.streak?.longest || 0}</div><div class="stat-label">Best Streak</div></div>
    </div>
    <h2 style="font-size:var(--text-xl);font-weight:var(--weight-bold);margin:var(--space-8) 0 var(--space-4)">🏆 Achievements</h2>
    <div class="achievements-grid stagger-children">
      ${achievements.map(a => {
        const unlocked = state.achievements?.includes(a.id);
        return `<div class="card achievement-card ${unlocked ? 'unlocked' : ''}">
          <div class="achievement-icon">${a.icon}</div>
          <div class="achievement-name">${a.name}</div>
          <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:4px">${a.desc}</div>
        </div>`;
      }).join('')}
    </div>`;

  app.appendChild(main);
}
