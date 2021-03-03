async function dad() {
  console.log('start1');
  await child().then((v) => console.log(v));
  console.log('ending1');
}
function child() {
  return new Promise((resolve) => {
    resolve('loading1');
  });
}
console.log(dad());

function dad1() {
  console.log('start2');
  child1().then((v) => console.log(v));
  console.log('ending2');
}
function child1() {
  return new Promise((resolve) => {
    resolve('loading2');
  });
}
console.log(dad1());
