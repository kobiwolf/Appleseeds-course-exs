class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  getSpeed() {
    return this.speed;
  }
  getBrand() {
    return this.brand;
  }
  print() {
    console.log(this.getBrand(), this.getSpeed());
  }
  setSpeed(speed) {
    this.speed = speed;
  }
}
const cars = [
  new Car('PORSHE', 140),
  new Car('BMW', 100),
  new Car('MERSEDES', 120),
  new Car('LEXUS', 160),
];
function highest(arr) {
  arr.sort((a, b) => b.getSpeed() - a.getSpeed());
  return arr;
}
highest(cars);
console.log(cars[0]);
