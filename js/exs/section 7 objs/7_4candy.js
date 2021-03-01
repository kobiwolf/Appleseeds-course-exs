const candyStore = {
  candies: [
    {
      name: 'mint gum',
      id: 'as12f',
      price: 2,
      amount: 2,
    },
    {
      name: 'twix',
      id: '5hd7y',
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
function getCandy(candyStore, id) {
  return candyStore.candies.find((obj) => (obj.id = id));
}
function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}
function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name, id, price, amount: '1' });
}
function buy(candyStore, id) {
  getCandy(candyStore, id).amount -= 1;
}
console.log(getCandy(candyStore, '5hd7y'));
