const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Hamburgers', 'Olives'];
let compare = (arr, arr1) => {
  let matchFood = [];
  let longerArr = arr.length > arr1.length ? arr.length : arr1.length;
  for (let i = 0; i < longerArr; i++) {
    arr.includes(arr1[i]) && matchFood.push(arr1[i]);
  }
  console.log(matchFood.length ? matchFood : false);
};
compare(food, food1);
