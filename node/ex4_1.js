const yargs = require('yargs');
const add = (num1, num2) => {
  console.log(num1 + num2);
};
const sub = (num1, num2) => {
  console.log(num1 - num2);
};
const mult = (num1, num2) => {
  console.log(num1 * num2);
};
const pow = (num) => {
  console.log(num ** 2);
};

yargs.command({
  command: 'add',
  describe: 'adding digits',
  handler: (argv) => {
    add(argv._[1], argv._[2]);
  },
});
yargs.command({
  command: 'sub',
  describe: 'subbing digits',
  handler: (argv) => {
    sub(argv._[1], argv._[2]);
  },
});
yargs.command({
  command: 'mult',
  describe: 'multiply digits',
  handler: (argv) => {
    mult(argv._[1], argv._[2]);
  },
});
yargs.command({
  command: 'pow',
  describe: 'powing digits',
  handler: (argv) => {
    pow(argv._[1]);
  },
});
yargs.parse();
