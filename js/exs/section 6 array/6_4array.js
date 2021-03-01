let populations = [
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
