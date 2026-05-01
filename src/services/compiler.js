const DIRECT_COMPILE_URL = 'https://go.dev/_/compile';

const CORS_PROXIES = [
  (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
];

async function fetchWithCORSProxies(url, options) {
  const direct = await fetchDirect(url, options);
  if (direct) return direct;

  for (const makeProxyUrl of CORS_PROXIES) {
    const result = await fetchViaProxy(makeProxyUrl(url), options);
    if (result) return result;
  }

  throw new Error('All compile endpoints failed. The compiler requires a server-side proxy.');
}

async function fetchDirect(url, options) {
  try {
    const resp = await fetch(url, { ...options, mode: 'cors' });
    if (resp.ok) return resp;
  } catch {
    return null;
  }
}

async function fetchViaProxy(proxyUrl, options) {
  try {
    const resp = await fetch(proxyUrl, {
      ...options,
      headers: { ...options.headers },
    });
    if (resp.ok) return resp;
  } catch {
    return null;
  }
  return null;
}

export async function compileAndRun(code) {
  try {
    const body = `version=2&body=${encodeURIComponent(code)}&withVet=true`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    };

    const resp = await fetchWithCORSProxies(DIRECT_COMPILE_URL, options);
    const data = await resp.json();

    if (data.Errors) {
      return { success: false, output: data.Errors, error: true };
    }

    const output = (data.Events || [])
      .filter(e => e.Kind === 'stdout' || e.Kind === 'stderr' || !e.Kind)
      .map(e => e.Message)
      .join('');

    return { success: true, output: output || '(no output)', error: false };
  } catch (err) {
    return { success: false, output: `Connection error: ${err.message}`, error: true };
  }
}
