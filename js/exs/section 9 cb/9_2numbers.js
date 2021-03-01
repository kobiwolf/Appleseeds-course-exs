const numbers = [1, -5, 666, 2, 400, 11];
function fromSmallToBig(arr) {
  return arr.sort((first, before) => first - before);
}
function fromBigToSmall(arr) {
  return arr.sort((first, before) => before - first);
}
console.log(fromSmallToBig(numbers));
console.log(fromBigToSmall(numbers));
