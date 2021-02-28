const storm = {
  superPower: 'farting lighting bolts',
};
function printSuperPower() {
  console.log('my superpower is ' + this.superPower);
}

storm.func = printSuperPower;
storm.func();
