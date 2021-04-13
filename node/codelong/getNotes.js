const fs = require('fs');
const chalk = require('chalk');

function addNote(title, body) {
  const data = oldNotes();
  const index = data.findIndex((note) => note.title === title);
  if (index === -1) {
    data.push({
      title,
      body,
    });
    saveNotes(data);
  } else console.log('taken');
}
function oldNotes() {
  try {
    const data = JSON.parse(fs.readFileSync('notesData.json').toString());
    return data;
  } catch (e) {
    return [];
  }
}
function saveNotes(data) {
  fs.writeFileSync('notesData.json', JSON.stringify(data));
}
function removeNote(title) {
  const data = oldNotes();
  const index = data.findIndex((note) => note.title === title);
  if (index !== -1) {
    data.splice(index, 1);
    saveNotes(data);
    console.log(chalk.green('note removed'));
  } else console.log(chalk.red('could not find such title'));
}

const listNotes = () => {
  const data = oldNotes();
  console.log(data);
};

const readNote = (title) => {
  const data = oldNotes();
  const picked = data.find((note) => note.title === title);
  if (picked) {
    console.log(chalk.yellow(picked.title));
    console.log(picked.body);
  } else console.log(chalk.red('didnt find any note'));
};

module.exports = { addNote, removeNote, listNotes, readNote };
