let a = new Promise((good, bad) => {
  setTimeout(() => {
    if (1 === 1) {
      good('you a winner');
      debugger;
    } else bad('you a looser');
  }, 1000);
});
a.then((v) => {
  console.log(v);
});
