
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

var centerX = width / 2,
  centerY = height / 2,
  angle = 0,
  dx,dy;

let v = new Vector(3,4);
let v1 = new Vector(2,5);

let v1v = v.multiply(v1);

console.log(v1v.getXY());

render();

function render() {

  context.clearRect(0, 0, width, height);
  
  requestAnimationFrame(render);
}

