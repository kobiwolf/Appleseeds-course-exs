const { describe } = require('yargs');
const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./getNotes');

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
  handler: ({ title, body }) => {
    addNote(title, body);
  },
});
yargs.command({
  command: 'remove',
  describe: 'removing a note',
  builder: {
    title: {
      type: 'string',
      demandOption: 'true',
      describe: "the note's title to remove ",
    },
  },
  handler: ({ title }) => {
    removeNote(title);
  },
});
yargs.command({
  command: 'list',
  describe: 'listing the notes',
  handler() {
    listNotes();
  },
});
yargs.command({
  command: 'read',
  describe: 'reading note by its title',
  builder: {
    title: {
      type: 'string',
      demandOption: 'true',
    },
  },
  handler({ title }) {
    readNote(title);
  },
});
yargs.parse();
