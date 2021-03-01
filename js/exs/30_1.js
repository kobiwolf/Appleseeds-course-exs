function check(num) {
  return new Promise((good, bad) => {
    if (num > 10) {
      good(num);
    } else bad(num);
  });
}
function handlerror(num) {
  console.log(`${num} is too small`);
}
check(9)
  .then((v) => {
    console.log(v);
  })
  .catch(handlerror);
