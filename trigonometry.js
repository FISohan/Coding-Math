
var width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

var centerX = width / 2,
  centerY = height / 2,
  offset = 100,
  angle = 0,
  speed = 0.04,
  baseRadius = 30;

render();

function render() {
  angle += speed;
  let x = centerX + Math.cos(angle) * offset;
  let y = centerY + Math.sin(angle) * offset;
  let r = baseRadius + Math.sin(angle) * baseRadius;

  context.clearRect(0, 0, width, height);
  
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2, false);
  context.fill();
  requestAnimationFrame(render);
}
