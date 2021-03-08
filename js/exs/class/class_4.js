class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  addToX(num) {
    this.x += num;
  }
  addToY(num) {
    this.y += num;
  }
  setX(num) {
    this.x = num;
  }
  setY(num) {
    this.y = num;
  }
  addPoint(obj) {
    this.addToX(obj.getX());
    this.addToY(obj.getY());
  }
  isSame(obj) {
    if (this.getX() === obj.getX() && this.getY === obj.getY) return true;
    return false;
  }
  print() {
    console.log(this.getX, this.getY);
  }
}
