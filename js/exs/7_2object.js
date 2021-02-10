let myCountry = {
  country: 'Israel',
  capital: 'Jerusalem',
  language: 'Hebrew',
  population: 9.5,
  neighbours: ['Jorden', 'greece', 'Lebanon'],
  describe() {
    console.log(`${this.country} has 6 million people, their mother tongue is ${this.language}, they
      have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },
  isIsland() {
    this.neighbours.length === 0 ? (this.Island = true) : (this.Island = false);
  },
};
myCountry.describe();
myCountry.isIsland();
console.log(myCountry.Island);
