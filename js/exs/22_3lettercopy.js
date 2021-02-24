//pesudo code
// make the design
//insert the elms to vars
// make a event of guesing
// make a func if letter worng
// the worng need to do:special massge,add the letter to the list
// make a func if letter guessed
// the gueseed need to do:special massge
// make a func if letter rigth
// the rigth need to do:special massge,show the letter,
// change the h2 the second to a qustion,make a button that reload the page
let form = document.querySelector('form');
let input = document.querySelector('input');
let h2first = document.querySelector('[name=changing]');
let h2second = document.querySelector('[name=keysH2]');
let p = document.querySelector('p');
let right = 'g';
function valid(guess) {
  if (/[a-z]/g.test(guess) && guess.length === 1) {
    h2first.style.color = 'black';
    h2first.innerText = 'Guess a letter';
    return true;
  } else {
    h2first.style.color = 'red';
    h2first.innerText = 'Not a vidal guess';
  }
}
function exist(guess) {
  let newLetter = true;
  p.innerText.split('').forEach((v) => {
    if (v === guess) newLetter = false;
  });
  if (!newLetter) {
    h2first.style.color = 'red';
    h2first.innerText = `${guess} already been guesssded`;
  }
  return newLetter;
}
function add(guess) {
  p.innerText += `${guess},`;
}
function addOrExist(guess) {
  if (exist(guess)) add(guess);
}
function endGame(guess) {
  input.value = guess;
  h2first.style.color = 'green';
  h2first.innerText = `Rigth Letter!`;
  h2second.innerText = 'would you like to play again?';
  p.remove();
  let but2 = document.createElement('button');
  but2.innerText = 'Yes,of course';
  but2.addEventListener('click', () => window.reload());
  form.appendChild(but2);
}
function check(e) {
  let guess = e.key;
  console.log(e.key);
  if (!guess) return;
  if (!valid(guess)) return;
  if (guess === right) endGame(guess);
  else addOrExist(guess);
}
function check1(e) {
  console.log(e.key);
}
input.maxLength = '0';
window.addEventListener('keyup', check);
