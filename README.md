# GoTeacher

**Master Go the Interactive Way**

GoTeacher is an interactive Go (Golang) learning platform — a single-page application that teaches Go through hands-on lessons, a built-in code editor/compiler, quizzes, and gamified progress tracking.

## Features

- **12-Chapter Go Curriculum** — From "Hello, Go!" to real-world projects (CLI, REST API, Web Server, Database)
- **Built-in Go Code Editor** — CodeMirror 6 with syntax highlighting, autocomplete, and live compilation via the Go Playground API
- **Interactive Quizzes** — 10 quizzes with multiple-choice questions, scoring, and explanations
- **Gamification** — XP, levels, daily streaks, and 12 achievements
- **Dark/Light Themes** — Persisted theme preference
- **Free-form Playground** — Experiment with Go templates outside of lessons
- **Progress Tracking** — Per-lesson and per-chapter progress, all saved locally via IndexedDB
- **Responsive Design** — Works on desktop and mobile

## Tech Stack

| Category | Technology |
|---|---|
| Build | Vite 8 |
| Language | Vanilla JavaScript (ES Modules) |
| Editor | CodeMirror 6 |
| Markdown | marked |
| Storage | IndexedDB |
| Compiler | go.dev/_/compile API |
| Styling | Pure CSS with Custom Properties |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

### Install & Run

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

Or use the convenience script:

```bash
bash start.sh
```

### Production Build

```bash
npm run build    # Output to dist/
npm run preview  # Preview the production build
```

> **Note:** The Go compiler proxy (`/compile` → `go.dev/_/compile`) is only available in development mode. For production, configure a reverse proxy (e.g., Nginx) to handle `/compile` requests.

## Project Structure

```
src/
├── main.js              # App bootstrap and route definitions
├── router.js            # Custom hash-based SPA router
├── store.js             # State management (IndexedDB + pub/sub)
├── components/
│   ├── CodeEditor.js    # CodeMirror 6 Go editor
│   ├── Navbar.js        # Top navigation bar
│   ├── Quiz.js          # Interactive quiz component
│   └── Sidebar.js       # Lesson navigation sidebar
├── pages/
│   ├── Home.js          # Landing/dashboard page
│   ├── LessonView.js    # Lesson page (content + editor + quiz)
│   ├── Playground.js    # Free-form Go coding playground
│   └── Profile.js       # User profile with stats & achievements
├── services/
│   └── compiler.js      # Go Playground API integration
├── data/
│   ├── curriculum.js    # 12-chapter Go curriculum
│   ├── quizzes.js       # Quiz definitions
│   └── achievements.js  # Achievement definitions
├── styles/              # CSS design system
├── utils/
│   ├── toast.js         # Toast notification system
│   └── confetti.js      # Confetti animation
└── assets/              # Images and static assets
```

## Curriculum

| Ch | Topic |
|---|---|
| 1 | Hello, Go! |
| 2 | Variables & Types |
| 3 | Control Flow |
| 4 | Functions |
| 5 | Data Structures |
| 6 | Pointers |
| 7 | Methods & Interfaces |
| 8 | Error Handling |
| 9 | Concurrency |
| 10 | Packages & Modules |
| 11 | Testing |
| 12 | Real Projects |

## License

Private project.
