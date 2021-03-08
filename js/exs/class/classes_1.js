class Animal {
  constructor(x, y) {
    this.name = x;
    this.sound = y;
  }
  getName() {
    return this.name;
  }
  getSound() {
    return this.sound;
  }
  print() {
    console.log(this.getName(), this.getSound());
  }
}
const dog = new Animal('dog', 'hoof');
const bird = new Animal('bird', 'zif-zif');
const cow = new Animal('cow', 'MOOOOOO');
dog.print();
bird.print();
cow.print();
