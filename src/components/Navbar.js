// GoTeacher — Navbar Component
import { getState, subscribe, setTheme } from '../store.js';
import { navigate } from '../router.js';

export function renderNavbar() {
  const state = getState();
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'main-navbar';

  nav.innerHTML = `
    <div class="navbar-logo" id="nav-home">
      <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="7" fill="url(#ng)"/>
      <defs><linearGradient id="ng" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#00E5CC"/><stop offset="1" stop-color="#007CF0"/></linearGradient></defs>
      <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-weight="900" font-size="16" fill="#0D1117">Go</text></svg>
      <span>GoTeacher</span>
    </div>
    <div class="navbar-actions">
      <div class="streak-display" id="nav-streak" title="Daily Streak">
        🔥 <span id="streak-count">${state.streak?.current || 0}</span>
      </div>
      <div class="xp-display" id="nav-xp" title="Experience Points">
        ⭐ <span id="xp-count">${state.xp || 0}</span> XP
        <span class="badge badge-accent" style="margin-left:4px">Lv ${state.level || 1}</span>
      </div>
      <button class="btn btn-ghost btn-icon" id="nav-playground" title="Playground">▶</button>
      <button class="btn btn-ghost btn-icon" id="nav-profile" title="Profile">👤</button>
      <button class="btn btn-ghost btn-icon" id="theme-toggle" title="Toggle Theme">
        ${state.settings?.theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <button class="btn btn-ghost btn-icon sidebar-toggle" id="sidebar-toggle" title="Toggle Sidebar">☰</button>
    </div>
  `;

  nav.querySelector('#nav-home').onclick = () => navigate('/');
  nav.querySelector('#nav-playground').onclick = () => navigate('/playground');
  nav.querySelector('#nav-profile').onclick = () => navigate('/profile');
  nav.querySelector('#theme-toggle').onclick = () => {
    const curr = getState().settings?.theme || 'dark';
    setTheme(curr === 'dark' ? 'light' : 'dark');
    const btn = nav.querySelector('#theme-toggle');
    btn.textContent = curr === 'dark' ? '🌙' : '☀️';
  };
  nav.querySelector('#sidebar-toggle').onclick = () => {
    document.querySelector('.sidebar')?.classList.toggle('open');
  };

  // Subscribe to XP updates
  subscribe((s) => {
    const xpEl = nav.querySelector('#xp-count');
    const streakEl = nav.querySelector('#streak-count');
    const lvlEl = nav.querySelector('.badge-accent');
    if (xpEl) xpEl.textContent = s.xp;
    if (streakEl) streakEl.textContent = s.streak?.current || 0;
    if (lvlEl) lvlEl.textContent = `Lv ${s.level}`;
  });

  return nav;
}
