let populations;
console.time('whilel');
populations = [
  ['Israel', 1000],
  ['France', 5000],
  ['Greece', 2000],
  ['Malta', 1500],
];
function populationPercentages(arr) {
  let percentages = [];
  let i = 0;
  while (i < arr.length) {
    percentages.push(pOfWorld1(arr[i]));
    i++;
  }
  return percentages;
}
function pOfWorld1([cityN, cityP], world = 10000) {
  return `${cityN} is ${((cityP / world) * 100).toFixed(2)}% of the world`;
}
console.log(populationPercentages(populations));
console.timeEnd('whilel');
console.time('forl');
populations = [
  ['Israel', 1000],
  ['France', 5000],
  ['Greece', 2000],
  ['Malta', 1500],
];
function populationPercentages(arr) {
  let percentages = [];
  for (let i = 0; i < arr.length; i++) {
    percentages.push(pOfWorld1(arr[i]));
  }
  return percentages;
}
function pOfWorld1([cityN, cityP], world = 10000) {
  return `${cityN} is ${((cityP / world) * 100).toFixed(2)}% of the world`;
}
console.log(populationPercentages(populations));

console.timeEnd('forl');
//we can see in the terminal that a for loop is fater but while is cleaner to the eye
