const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);


render();

function render() {

  requestAnimationFrame(render);
}
