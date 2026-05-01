const COMPILE_URL = 'https://go.dev/_/compile';
const PROXY_URL = 'https://corsproxy.io/?' + encodeURIComponent(COMPILE_URL);

async function tryCompile(url, options) {
  const resp = await fetch(url, options);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();
}

export async function compileAndRun(code) {
  const body = `version=2&body=${encodeURIComponent(code)}&withVet=true`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  };

  let data;
  try {
    data = await tryCompile(PROXY_URL, options);
  } catch {
    try {
      data = await tryCompile(COMPILE_URL, options);
    } catch (err) {
      return { success: false, output: `Connection error: ${err.message}`, error: true };
    }
  }

  if (data.Errors) {
    return { success: false, output: data.Errors, error: true };
  }

  const output = (data.Events || [])
    .filter(e => e.Kind === 'stdout' || e.Kind === 'stderr' || !e.Kind)
    .map(e => e.Message)
    .join('');

  return { success: true, output: output || '(no output)', error: false };
}
