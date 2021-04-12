const yargs = require('yargs');

const { addUser, update, deleteUser, read } = require('./crud');
yargs.command({
  command: 'add',
  describe: 'adding a user',
  builder: {
    name: {
      type: 'string',
      demandOption: true,
    },
    Email: {
      type: 'string',
      demandOption: true,
    },
  },
  handler({ name, Email }) {
    addUser(name, Email);
  },
});
yargs.command({
  command: 'update',
  describe: 'update a user',
  builder: {
    id: {
      type: 'string',
      demandOption: true,
    },
    name: {
      type: 'string',
      demandOption: true,
    },
    Email: {
      type: 'string',
      demandOption: true,
    },
  },
  handler({ id, name, Email }) {
    update(id, name, Email);
  },
});

yargs.command({
  command: 'delete',
  describe: 'delete a user',
  builder: {
    id: {
      type: 'string',
      demandOption: true,
    },
  },
  handler({ id }) {
    deleteUser(id);
  },
});
yargs.command({
  command: 'read',
  describe: 'read a user',
  builder: {
    id: {
      type: 'string',
      demandOption: true,
    },
  },
  handler({ id }) {
    read(id);
  },
});

yargs.parse();
