'use strict';
function describeCountry(city, amount, capital) {
  return `${city} has ${amount} million peoples,And its capital is:${capital}`;
}
let a = describeCountry('Israel', 6, 'Jerusalm');
let b = describeCountry('France', 19, 'Paris');
let c = describeCountry('Germany', 25, 'Berlin');
console.log(a, b, c);
