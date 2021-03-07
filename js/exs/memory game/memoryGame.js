const get = (type) => document.querySelector(type);
const create = (type) => document.createElement(type);
const easy = get('.easy');
const welcome = get('.welcome');
const game = get('.game');
const board = get('.board');
const winnerDiv = get('.winner');
const buts = document.querySelectorAll('.butsDiv>button');
const newGameBut = get('.newgame');
const span = get('span');
let acc;
const state = {
  currentCard: [],
  allCards: [],
  winCount: 0,
};
buts.forEach((v) =>
  v.addEventListener('click', (e) => {
    setInterval(timeDown, 1);
    game.classList.remove('hidden');
    welcome.classList.add('hidden');
    board.classList.remove('hidden');
    board.classList.add(`${v.innerText}`);
    switch (v.innerText) {
      case 'Easy':
        acc = 6;
        break;
      case 'Medium':
        acc = 9;
        break;
      default:
        acc = 12;
        break;
    }
    for (let i = 1; i <= acc; i++) {
      for (let j = 1; j <= 2; j++) {
        const card = create('div');
        const value = create('h2');
        value.classList.add('hidden');
        value.innerText = `${i}`;
        card.appendChild(value);
        card.dataset.card = `${i}`;
        state.allCards.push(card);
        play(card);
      }
    }
    shuffle(state.allCards);
    state.allCards.forEach((v) => {
      board.appendChild(v);
    });
  })
);
function play(card) {
  card.addEventListener('click', click);
}
function click(e) {
  console.log('hi');
  const card = e.target;
  state.currentCard.push(card);
  if (state.currentCard.length === 1) {
    card.removeEventListener('click', click);
    card.firstElementChild.classList.remove('hidden');
  } else {
    match();
  }
}
function match() {
  const first = state.currentCard[0];
  const second = state.currentCard[1];
  second.firstElementChild.classList.remove('hidden');
  if (first.dataset.card === second.dataset.card) {
    first.classList.add('notVisible');
    second.classList.add('notVisible');
    state.winCount++;
    if (state.winCount === acc) gameOver();
  } else {
    delay();
    span.innerText = parseInt(span.innerText) + 1;
    setTimeout(() => {
      second.firstElementChild.classList.add('hidden');
      first.firstElementChild.classList.add('hidden');
    }, 1000);
  }
  state.currentCard = [];
}
function delay() {
  state.allCards.forEach((card) => card.removeEventListener('click', click));
  setTimeout(() => {
    state.allCards.forEach((card) => card.addEventListener('click', click));
  }, 1000);
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function gameOver() {
  board.classList.add('hidden');
  winnerDiv.classList.remove('hidden');
  game.classList.add('hidden');
}
newGameBut.addEventListener('click', () => {
  location.reload();
});

// the stopper
let hour = get('#hour');
let minutes = get('#minutes');
let seconds = get('#seconds');
function timeDown() {
  seconds.innerText = parseInt(seconds.innerText) - 1;
  if (parseInt(seconds.innerText) === -1) {
    seconds.innerText = 999;
    minutes.innerText = parseInt(minutes.innerText) - 1;
  }
  if (parseInt(minutes.innerText) === -1) {
    minutes.innerText = 59;
    hour.innerText = parseInt(hour.innerText) - 1;
  }
  if (parseInt(hour.innerText) === -1) {
    hour.innerText = 59;
  }
}
