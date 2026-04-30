// GoTeacher — Main Entry Point
import './styles/index.css';
import { route, startRouter } from './router.js';
import { init } from './store.js';
import { renderHome } from './pages/Home.js';
import { renderLessonView } from './pages/LessonView.js';
import { renderPlayground } from './pages/Playground.js';
import { renderProfile } from './pages/Profile.js';

async function bootstrap() {
  await init();

  route('/', (app) => renderHome(app));
  route('/playground', (app) => renderPlayground(app));
  route('/profile', (app) => renderProfile(app));
  route('/lesson/:chapterId/:lessonId', (app, params) => renderLessonView(app, params));

  startRouter();
}

bootstrap();
