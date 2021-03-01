function Pokemon(name, type, arr) {
  this.name = name;
  this.type = type;
  this.AttackList = arr;
}
Pokemon.prototype.printName = function () {
  console.log(`I choosing you ${this.name} for all enternty`);
};
Pokemon.prototype.attack = function (num) {
  console.log(`${this.name} used ${this.AttackList[num]} `);
};
let first = new Pokemon('Para', 'cow', ['firing milk', 'loud MMOOOOO', 'butt']);
let second = new Pokemon('Eragon', 'dragon', ['fire', 'bite', 'scratch']);
let third = new Pokemon('Vold', 'sneak', ['poison', 'strangle', 'bite']);
first.attack(2);
second.printName();
third.printName();
third.attack(0);
