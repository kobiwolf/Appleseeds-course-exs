function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
Square.prototype.isSquare = function () {
  return (
    this.a === this.b &&
    this.b === this.c &&
    this.c === this.d &&
    this.d === this.a
  );
};
let a = new Square(1, 1, 1, 1);
console.log(a.isSquare());
