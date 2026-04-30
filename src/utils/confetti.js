// GoTeacher — Confetti Effect
export function fireConfetti(container) {
  const colors = ['#00E5CC', '#FFD700', '#FF6B6B', '#7C5CFF', '#00C9A7'];
  const count = 60;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.style.cssText = `
      position:absolute;width:8px;height:8px;
      background:${colors[i % colors.length]};
      left:${50 + (Math.random()-0.5)*20}%;top:40%;
      border-radius:${Math.random()>0.5?'50%':'2px'};
      opacity:1;pointer-events:none;z-index:999;
    `;
    container.appendChild(piece);
    const angle = Math.random() * Math.PI * 2;
    const velocity = 150 + Math.random() * 200;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity - 200;
    piece.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${dx}px,${dy + 400}px) rotate(${Math.random()*720}deg)`, opacity: 0 }
    ], { duration: 1000 + Math.random()*500, easing: 'cubic-bezier(0.25,0.46,0.45,0.94)', fill: 'forwards' });
    setTimeout(() => piece.remove(), 1600);
  }
}
