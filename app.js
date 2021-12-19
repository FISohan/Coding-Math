const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

var toRed = (d) => (Math.PI / 180) * d;

let p = [];
var pNum = 500;
window.addEventListener("mousedown", (e) => {
  let x = [];

  for (let i = 0; i < pNum; i++) {
     x.push(new Particles(e.clientX,e.clientY / 2, 6,Math.random()*i
      ))
  }
  p = [...x];

});

update();

function update() {
  context.clearRect(0, 0, width, height);
  if (p.length != 0) {
    for (let i = 0; i < p.length; i++) {
      context.beginPath();
      p[i].update();
      context.arc(
        p[i].position.x,
        p[i].position.y,
        10,
        (Math.PI / 180) * 2,
        0,
        false
      );
      context.fill();
    }
  }

  requestAnimationFrame(update);
}
