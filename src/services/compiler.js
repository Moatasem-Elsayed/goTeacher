// GoTeacher — Go Playground Compiler Service
const COMPILE_URL = '/compile';

export async function compileAndRun(code) {
  try {
    const resp = await fetch(COMPILE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `version=2&body=${encodeURIComponent(code)}&withVet=true`
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
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
