// GoTeacher — Quiz Component
import { quizzes } from '../data/quizzes.js';
import { saveQuizScore, addXP } from '../store.js';
import { showToast } from '../utils/toast.js';
import { fireConfetti } from '../utils/confetti.js';

export function renderQuiz(container, quizId) {
  const quiz = quizzes[quizId];
  if (!quiz) { container.innerHTML = '<p>Quiz not found.</p>'; return; }

  let current = 0, score = 0, answered = false;

  function renderQuestion() {
    const q = quiz.questions[current];
    const letters = ['A', 'B', 'C', 'D'];
    container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-header">
          <h2>${quiz.title}</h2>
          <div class="quiz-progress">
            <span>${current + 1} / ${quiz.questions.length}</span>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${((current) / quiz.questions.length) * 100}%"></div></div>
          </div>
        </div>
        <div class="quiz-question-text">${q.q}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <div class="quiz-option" data-idx="${i}">
              <span class="quiz-option-letter">${letters[i]}</span>
              <span>${opt}</span>
            </div>`).join('')}
        </div>
        <div id="quiz-feedback"></div>
        <div style="margin-top:var(--space-4);display:none" id="quiz-next-wrap">
          <button class="btn btn-primary" id="quiz-next">${current < quiz.questions.length - 1 ? 'Next Question →' : 'See Results'}</button>
        </div>
      </div>`;

    answered = false;
    container.querySelectorAll('.quiz-option').forEach(el => {
      el.onclick = () => {
        if (answered) return;
        answered = true;
        const idx = Number(el.dataset.idx);
        const correct = idx === q.correct;
        if (correct) score++;

        container.querySelectorAll('.quiz-option').forEach((o, i) => {
          if (i === q.correct) o.classList.add('correct');
          else if (i === idx && !correct) o.classList.add('incorrect');
        });

        const fb = container.querySelector('#quiz-feedback');
        fb.innerHTML = `<div class="quiz-explanation callout ${correct ? 'callout-tip' : 'callout-warning'}">
          ${correct ? '✓ Correct!' : '✗ Incorrect.'} ${q.explanation}</div>`;

        container.querySelector('#quiz-next-wrap').style.display = 'block';
      };
    });

    container.querySelector('#quiz-next').onclick = () => {
      current++;
      if (current < quiz.questions.length) renderQuestion();
      else showResults();
    };
  }

  async function showResults() {
    const total = quiz.questions.length;
    const pct = Math.round((score / total) * 100);
    const perfect = score === total;
    const firstAttempt = true; // simplified
    const xpGain = perfect ? 100 : 50;

    await saveQuizScore(quizId, score, total);
    await addXP(xpGain);
    showToast(`+${xpGain} XP for completing the quiz!`, 'xp');

    container.innerHTML = `
      <div class="quiz-result" style="position:relative">
        <div class="quiz-result-score">${pct}%</div>
        <h2>${perfect ? '🎉 Perfect Score!' : score >= total / 2 ? '👏 Great Job!' : '📚 Keep Practicing!'}</h2>
        <p style="color:var(--text-muted);margin:var(--space-4) 0">${score} / ${total} correct</p>
        <p style="color:var(--color-accent);margin-bottom:var(--space-6)">+${xpGain} XP earned</p>
        <button class="btn btn-secondary" id="quiz-retry">Try Again</button>
      </div>`;

    if (perfect) fireConfetti(container.querySelector('.quiz-result'));
    container.querySelector('#quiz-retry').onclick = () => { current = 0; score = 0; renderQuestion(); };
  }

  renderQuestion();
}
