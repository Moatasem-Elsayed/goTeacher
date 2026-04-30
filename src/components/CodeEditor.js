// GoTeacher — CodeEditor Component
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightSpecialChars } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { go } from '@codemirror/lang-go';
import { oneDark } from '@codemirror/theme-one-dark';
import { compileAndRun } from '../services/compiler.js';
import { saveLessonCode, addXP } from '../store.js';
import { showToast } from '../utils/toast.js';

export function renderCodeEditor(container, { code, lessonId, savedCode }) {
  const initialCode = savedCode || code || 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello!")\n}';

  container.innerHTML = `
    <div class="editor-container">
      <div class="editor-toolbar">
        <div class="editor-toolbar-left">📄 main.go</div>
        <div class="editor-toolbar-right">
          <button class="btn btn-ghost btn-sm" id="btn-reset" title="Reset Code">↺ Reset</button>
          <button class="btn btn-ghost btn-sm" id="btn-copy" title="Copy Code">📋 Copy</button>
          <button class="btn btn-primary btn-sm" id="btn-run" title="Run Code (Ctrl+Enter)">▶ Run</button>
        </div>
      </div>
      <div class="editor-panes">
        <div class="editor-pane" id="code-editor-mount"></div>
        <div class="output-pane">
          <div class="output-header">
            <span>Output</span>
            <span id="output-status"></span>
          </div>
          <div class="output-body" id="output-body">Click <strong>Run</strong> or press <strong>Ctrl+Enter</strong> to execute your code.</div>
        </div>
      </div>
    </div>`;

  const mount = container.querySelector('#code-editor-mount');
  const outputBody = container.querySelector('#output-body');
  const outputStatus = container.querySelector('#output-status');
  const btnRun = container.querySelector('#btn-run');
  const btnReset = container.querySelector('#btn-reset');
  const btnCopy = container.querySelector('#btn-copy');

  const runCode = async () => {
    const src = view.state.doc.toString();
    btnRun.disabled = true;
    btnRun.innerHTML = '<span class="animate-spin" style="display:inline-block">⟳</span> Running...';
    outputBody.textContent = 'Compiling...';
    outputBody.className = 'output-body';
    outputStatus.textContent = '';

    if (lessonId) saveLessonCode(lessonId, src);

    const result = await compileAndRun(src);

    btnRun.disabled = false;
    btnRun.innerHTML = '▶ Run';
    outputBody.textContent = result.output;
    outputBody.className = `output-body ${result.error ? 'error' : 'success'}`;
    outputStatus.textContent = result.error ? '✗ Error' : '✓ Success';
    outputStatus.style.color = result.error ? 'var(--color-error-light)' : 'var(--color-success-light)';

    if (!result.error) {
      const { leveledUp } = await addXP(5);
      showToast('+5 XP for running code!', 'xp');
      if (leveledUp) showToast('🎉 Level Up!', 'success');
    }
  };

  const state = EditorState.create({
    doc: initialCode,
    extensions: [
      lineNumbers(),
      highlightActiveLine(),
      highlightSpecialChars(),
      go(),
      oneDark,
      keymap.of([...defaultKeymap, indentWithTab, { key: 'Ctrl-Enter', run: () => { runCode(); return true; } }]),
      EditorView.theme({
        '&': { height: '100%', fontSize: '14px' },
        '.cm-scroller': { fontFamily: 'var(--font-mono)', overflow: 'auto' },
        '.cm-content': { padding: '16px 0' }
      })
    ]
  });

  const view = new EditorView({ state, parent: mount });

  btnRun.onclick = runCode;
  btnReset.onclick = () => {
    view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: code } });
    outputBody.textContent = 'Code reset. Click Run to execute.';
    outputBody.className = 'output-body';
  };
  btnCopy.onclick = () => {
    navigator.clipboard.writeText(view.state.doc.toString());
    showToast('Copied to clipboard!', 'success');
  };

  return { view, getCode: () => view.state.doc.toString() };
}
