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
    if (this.getX() === obj.getX() && this.getY() === obj.getY()) return true;
    return false;
  }
  print() {
    console.log(this.getX, this.getY);
  }
}
class PointWorld {
  constructor(arr = []) {
    this.pointList = arr;
  }
  mySort() {
    return this.pointList.sort((a, b) => a.getY() - b.getY());
  }
  myFilter() {
    let filtered = [];
    let myset = new Set();
    this.pointList.forEach((point) =>
      myset.add(`${point.getX().toString() + ',' + point.getY().toString()}`)
    );
    myset.forEach((point) => {
      filtered.push(point.split(','));
    });
    filtered = filtered.map(
      (point) => new Point(parseInt(point[0]), parseInt(point[1]))
    );
    return filtered;
  }
  sumOfX() {
    return this.pointList.reduce((acc, point) => (acc += point.getX()), 0);
  }
  isExsit(checker) {
    let booli = false;
    this.pointList.forEach((point) => {
      if (point.getX() === checker.getX() && point.getY() === checker.getY())
        booli = true;
    });
    return booli;
  }
}
let arr1 = new PointWorld([
  new Point(5, 6),
  new Point(2, 1),
  new Point(13, 12),
  new Point(13, 12),
  new Point(11, 10),
]);
console.log(arr1);
arr1.myFilter();
console.log(arr1.isExsit());
