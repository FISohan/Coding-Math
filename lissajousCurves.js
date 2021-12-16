var width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

var centerX = width / 2,
  centerY = height / 2,
  offset = 100,
  angle = 0,
  speed = 0.00001,
  baseRadius = 20,
  speedX = 0.09,
  speedY = 0.08,
  angleX = 0,
  angleY = 0,
  radiusX = 200,
  radiusY = 200

render();

function render() {
  let x = centerX + Math.cos(angleX) * radiusX;
  let y = centerY + Math.sin(angleY) * radiusY;
  //context.clearRect(0, 0, width, height);
  
  context.beginPath();
  context.arc(x, y, 2, 0, Math.PI * 2, false);
  context.fill();
    angleX += speedX;
    angleY += speedY;
  requestAnimationFrame(render);
}
