// GoTeacher — Sidebar Component
import { chapters } from '../data/curriculum.js';
import { getLessonStatus } from '../store.js';
import { navigate, getCurrentPath } from '../router.js';

export function renderSidebar() {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'main-sidebar';

  const path = getCurrentPath();

  let html = '';
  chapters.forEach(ch => {
    const isActive = path.includes(`/lesson/${ch.id}/`) || path === `/chapter/${ch.id}`;
    html += `<div class="sidebar-chapter">
      <div class="sidebar-chapter-title ${isActive ? 'active' : ''}" data-chapter="${ch.id}">
        <span>${ch.icon} ${ch.title}</span>
        <span class="qa-chevron">${isActive ? '▾' : '▸'}</span>
      </div>
      <div class="sidebar-lessons ${isActive ? 'expanded' : ''}">`;
    ch.lessons.forEach(l => {
      const status = getLessonStatus(l.id);
      const isCurrent = path === `/lesson/${ch.id}/${l.id}`;
      const statusClass = status === 'completed' ? 'completed' : isCurrent ? 'active' : '';
      const iconClass = status === 'completed' ? 'completed' : isCurrent ? 'active' : '';
      const icon = status === 'completed' ? '✓' : l.type === 'quiz' ? '?' : l.type === 'coming-soon' ? '🔒' : '';
      html += `<div class="sidebar-lesson ${statusClass}" data-lesson="${ch.id}/${l.id}">
        <span class="lesson-status-icon ${iconClass}">${icon}</span>
        <span>${l.title}</span>
      </div>`;
    });
    html += `</div></div>`;
  });

  sidebar.innerHTML = html;

  sidebar.querySelectorAll('.sidebar-chapter-title').forEach(el => {
    el.onclick = () => {
      const lessons = el.nextElementSibling;
      const chevron = el.querySelector('.qa-chevron');
      lessons.classList.toggle('expanded');
      chevron.textContent = lessons.classList.contains('expanded') ? '▾' : '▸';
    };
  });

  sidebar.querySelectorAll('.sidebar-lesson').forEach(el => {
    el.onclick = () => {
      const [chId, lId] = el.dataset.lesson.split('/');
      const ch = chapters.find(c => c.id === Number(chId));
      const lesson = ch?.lessons.find(l => l.id === lId);
      if (lesson?.type === 'coming-soon') return;
      navigate(`/lesson/${chId}/${lId}`);
    };
  });

  return sidebar;
}
