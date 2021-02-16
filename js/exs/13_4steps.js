function step(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`${'#'.repeat(i)}${' '.repeat(num - i)}`);
  }
}
step(3);
//ninja
function ninja(num) {
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num; col++) {}
  }
}
