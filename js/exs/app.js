function a(num) {
  return (num += 1);
}
function b(num) {
  return (num -= 1);
}
function c(num) {
  return num;
}
module.exports = [a, b, c];
function d() {
  console.log('stam');
}
d();
