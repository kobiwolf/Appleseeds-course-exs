function findDifference(a, b) {
  return a[0] * a[1] * a[2] - b[0] * b[1] * b[2] > 0
    ? a[0] * a[1] * a[2] - b[0] * b[1] * b[2]
    : b[0] * b[1] * b[2] - a[0] * a[1] * a[2];
}
let a = [1, 2, 5, 3, 4];
a.forEach((value, key, arr) => {
  return value + 1 !== arr[key + 1] ? arr[key + 1] : '';
});
