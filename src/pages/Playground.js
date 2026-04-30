// GoTeacher — Playground Page
import { renderNavbar } from '../components/Navbar.js';
import { renderCodeEditor } from '../components/CodeEditor.js';

const templates = {
  'Hello World': `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}`,
  'HTTP Server': `package main\n\nimport (\n\t"fmt"\n\t"net/http"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n\tfmt.Fprintf(w, "Hello, Web!")\n}\n\nfunc main() {\n\thttp.HandleFunc("/", handler)\n\tfmt.Println("Server starting on :8080")\n\t// http.ListenAndServe(":8080", nil)\n\tfmt.Println("(Server disabled in playground)")\n}`,
  'Goroutines': `package main\n\nimport (\n\t"fmt"\n\t"sync"\n)\n\nfunc worker(id int, wg *sync.WaitGroup) {\n\tdefer wg.Done()\n\tfmt.Printf("Worker %d starting\\n", id)\n\tfmt.Printf("Worker %d done\\n", id)\n}\n\nfunc main() {\n\tvar wg sync.WaitGroup\n\tfor i := 1; i <= 5; i++ {\n\t\twg.Add(1)\n\t\tgo worker(i, &wg)\n\t}\n\twg.Wait()\n\tfmt.Println("All workers completed")\n}`,
  'Structs': `package main\n\nimport "fmt"\n\ntype Person struct {\n\tName string\n\tAge  int\n}\n\nfunc (p Person) Greet() string {\n\treturn fmt.Sprintf("Hi, I'm %s, age %d", p.Name, p.Age)\n}\n\nfunc main() {\n\tp := Person{Name: "Alice", Age: 30}\n\tfmt.Println(p.Greet())\n}`,
};

export function renderPlayground(app) {
  app.innerHTML = '';
  app.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.className = 'main-content full-width playground-page page-enter';

  const toolbar = document.createElement('div');
  toolbar.style.cssText = 'display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-3)';
  toolbar.innerHTML = `
    <h2 style="font-size:var(--text-xl);font-weight:var(--weight-bold);flex:1">⌨ Go Playground</h2>
    <label style="font-size:var(--text-sm);color:var(--text-muted)">Template:</label>
    <select class="input" id="template-select" style="width:200px">
      ${Object.keys(templates).map(t => `<option value="${t}">${t}</option>`).join('')}
    </select>`;
  main.appendChild(toolbar);

  const editorWrap = document.createElement('div');
  editorWrap.style.flex = '1';
  main.appendChild(editorWrap);
  app.appendChild(main);

  let editor = null;
  setTimeout(() => {
    editor = renderCodeEditor(editorWrap, { code: templates['Hello World'] });
  }, 50);

  toolbar.querySelector('#template-select').onchange = (e) => {
    const code = templates[e.target.value];
    if (editor?.view) {
      editor.view.dispatch({ changes: { from: 0, to: editor.view.state.doc.length, insert: code } });
    }
  };
}
