const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return 'I am stronger';
  } else return 'You are stronger';
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));
// in line 16 we didnt passed a method or the resutl of methoed we passed a func to whoIsStronger and a this
// in a func alwayls points to the global
// 3 fixes
// 1-use bind
// 2-send result
// 3-send a method
