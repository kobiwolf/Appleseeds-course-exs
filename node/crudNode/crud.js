const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const uniqid = require('uniqid');

const getUsers = () => {
  try {
    const data = JSON.parse(fs.readFileSync('users.json').toString());
    return data;
  } catch (e) {
    return [];
  }
};
const saveUsers = (data) => {
  const string = JSON.stringify(data);
  fs.writeFileSync('users.json', string);
};
const addUser = (name, email) => {
  if (!validator.isEmail(email)) {
    console.log(chalk.red('not a valid email'));
  } else {
    const data = getUsers();
    data.push({
      id: uniqid(),
      name,
      email,
    });
    saveUsers(data);
  }
};
const update = (id, name, email) => {
  const data = getUsers();
  const picked = data.find((user) => user.id === id);

  if (!picked) console.log(chalk.red('can not find user'));
  else {
    data[data.findIndex((user) => user.id === id)] = {
      id,
      name,
      email,
    };
    saveUsers(data);
  }
};
const deleteUser = (id) => {
  const data = getUsers();
  const picked = data.findIndex((user) => user.id === id);
  if (picked === -1) console.log(chalk.red('can not find user'));
  else {
    data.splice(picked, 1);
    saveUsers(data);
  }
};
const read = (id) => {
  const data = getUsers();
  debugger;
  const picked = data.find((user) => user.id === id);
  picked ? console.log(picked) : console.log('cannot find user');
};
module.exports = { addUser, update, deleteUser, read };
