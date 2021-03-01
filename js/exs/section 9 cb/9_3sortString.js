const foods = ['falafel', 'sabich', 'hummus', 'pizza with extra', 'pineapple'];
let sortFood = (arr) => arr.sort();
let reveresSorted = (arr) => sortFood(arr).reverse();
const foodsWithUpperCase = [
  'falafel',
  'Sabich',
  'hummus',
  'pizza with extra pineapple',
];
let lowCapital = (arr) => {
  let arr2 = [];
  arr.forEach((element) => {
    arr2.push(element.toLowerCase());
  });
  return arr2;
};
console.log(sortFood(lowCapital(foodsWithUpperCase)));
console.log(reveresSorted(lowCapital(foodsWithUpperCase)));
const words = ['apple', 'supercalifragilisticexpialidocious', 'hi', 'zoo'];
console.log(words.sort((b, a) => a.length - b.length));
