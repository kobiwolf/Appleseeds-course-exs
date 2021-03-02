let a = [[78], [117, 110, 99], [104, 117], [107, 115]];
function wow(a) {
  return a
    .flat()
    .map((v) => String.fromCharCode(v))
    .join('');
}
console.log(wow(a));
