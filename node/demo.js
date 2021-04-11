const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'adding shit',
  builder: {
    title: {
      describe: 'some title',
      type: 'string',
      demandOption: true,
    },
    body: {
      describe: 'good body',
      type: 'string',
    },
  },
  handler: (argv) => {
    console.log('adding', argv.title, argv.body);
  },
});

yargs.parse();
