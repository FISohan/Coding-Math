class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  setX(value) {
    this.x = value;
  }

  getY() {
    return this.y;
  }

  setY(value) {
    this.y = value;
  }

  getXY() {
    return [this.x, this.y];
  }

  getAngle() {
    return Math.atan2(this.x, this.y);
  }

  setAngle(angle) {
    let len = this.getAngle();
    this.x = Math.cos(angle) * len;
    this.y = Math.sin(angle) * len;
  }

  setLength(len) {
    let angle = this.getAngle();
    this.x = Math.cos(angle) * len;
    this.y = Math.sin(angle) * len;
  }
  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add(vec) {
    let o = new Vector(this.x + vec.x, this.y + vec.y);
    return o;
  }

  subtract(vec) {
    let o = new Vector(this.x - vec.x, this.y - vec.y);
    return o;
  }

  multiply(value) {
    let o = new Vector(this.x * value, this.y * value);
    return o;
  }

  divide(value) {
    let o = new Vector(this.x / value, this.y / value);
    return o;
  }
}
