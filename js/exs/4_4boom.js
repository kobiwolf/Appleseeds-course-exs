function Boom(num) {
  for (let i = 1; i < num; i++) {
    if (i.toString().includes('7') && i % 7 === 0) {
      console.log('boom-boom');
    } else if (i.toString().includes(7) || i % 7 === 0) {
      console.log('boom');
    } else {
      console.log(i);
    }
  }
}
Boom(18);
