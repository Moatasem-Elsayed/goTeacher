// GoTeacher — Hash Router
const routes = {};
let currentCleanup = null;

export function route(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.hash = '#' + path;
}

function matchRoute(hash) {
  const path = hash.replace('#', '') || '/';
  // Exact match
  if (routes[path]) return { handler: routes[path], params: {} };
  // Param matching
  for (const pattern of Object.keys(routes)) {
    const patternParts = pattern.split('/');
    const pathParts = path.split('/');
    if (patternParts.length !== pathParts.length) continue;
    const params = {};
    let match = true;
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        params[patternParts[i].slice(1)] = pathParts[i];
      } else if (patternParts[i] !== pathParts[i]) {
        match = false;
        break;
      }
    }
    if (match) return { handler: routes[pattern], params };
  }
  return null;
}

export function startRouter() {
  const handleRoute = () => {
    const result = matchRoute(window.location.hash);
    const app = document.getElementById('app');
    if (currentCleanup) { currentCleanup(); currentCleanup = null; }
    if (result) {
      currentCleanup = result.handler(app, result.params) || null;
    } else {
      app.innerHTML = `<div class="main-content full-width" style="display:flex;align-items:center;justify-content:center;"><h1>404 — Page not found</h1></div>`;
    }
  };
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

export function getCurrentPath() {
  return (window.location.hash.replace('#', '') || '/');
}
