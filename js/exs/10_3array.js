const data = [
  {
    name: 'John',
    birthday: '1-1-1995',
    favoriteFoods: {
      meats: ['hamburgers', 'sausages'],
      fish: ['salmon', 'pike'],
    },
  },
  {
    name: 'Mark',
    birthday: '10-5-1980',
    favoriteFoods: {
      meats: ['hamburgers', 'steak', 'lamb'],
      fish: ['tuna', 'salmon', 'barracuda'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['ham', 'chicken'],
      fish: ['pike'],
    },
  },
  {
    name: 'Thomas',
    birthday: '1-10-1990',
    favoriteFoods: {
      meats: ['bird', 'rooster'],
      fish: ['salmon'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['hamburgers', 'lamb'],
      fish: ['anchovies', 'tuna'],
    },
  },
];
//ex1
let names = (arr) => arr.map((value) => value.name);
console.log(names(data));
//ex2
let bornBeforeAge = (arr, age) => {
  let obj = [];
  arr.forEach((value) => {
    let date = value.birthday.split('-');
    date[date.length - 1] < age && obj.push(value);
  });
  return obj;
};
console.log(bornBeforeAge(data, 2000));
//ex3
function checkfood(food, obj) {
  return obj[food] ? obj[food] + 1 : (obj[food] = 1);
}
let foodsCount = (arr, cb) => {
  let allFood = [];
  let obj = {};
  arr.forEach((value) => {
    allFood.push(value.favoriteFoods.meats);
    allFood.push(value.favoriteFoods.fish);
  });
  allFood = [].concat(...allFood);
  allFood.forEach((value) => {
    obj[value] = cb(value, obj);
  });
  return obj;
};
console.log(foodsCount(data, checkfood));
