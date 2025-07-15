// 🎉 Confetti Setup
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];
for (let i = 0; i < 150; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 8 + 4,
    speedY: Math.random() * 2 + 1,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
  });
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of pieces) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.speedY;
    if (p.y > canvas.height) p.y = 0;
  }
  requestAnimationFrame(updateConfetti);
}
updateConfetti();

// 🎵 Play music on first click
const music = document.getElementById("bgMusic");
document.addEventListener("click", () => {
  music.play().catch(err => console.warn("Audio blocked:", err));
}, { once: true });

// 🕯️ Candle Blow
function blowCandle() {
  const flame = document.getElementById("flame");
  flame.style.display = "none";
  alert("🎂 Make a wish and enjoy your day!");
}
