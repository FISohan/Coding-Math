var centerX = width / 2,
  centerY = height / 2,
  angle = 0,
  dx,dy;

render();

function render() {

  context.clearRect(0, 0, width, height);
  
  context.save();
  context.translate(centerX - 10, centerY);
  context.rotate(angle);
  
  context.beginPath();
  context.moveTo(20, 0);
  context.lineTo(-20, 0);
  context.moveTo(20, 0);
  context.lineTo(10, -10);
  context.moveTo(20, 0);
  context.lineTo(10, 10);
  context.stroke();
  context.restore();
  requestAnimationFrame(render);
}

window.addEventListener('mousemove',(e)=>{
  dx =  e.clientX - centerX
  dy =  e.clientY - centerY
  angle = Math.atan2(dy,dx)
})