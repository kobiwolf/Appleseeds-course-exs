const root = 'https://api.github.com/users/';
const get = (type) => document.querySelector(type);
const create = (type) => document.createElement(type);
const cardDiv = get('.cardDiv');
const but = get('button');
let inputEl = get('input');

inputEl.focus();
but.addEventListener('click', () => {
  cardDiv.innerHTML = '';
  safe(fetchData, inputEl.value);
  inputEl.value = '';
});
async function fetchData(input) {
  input = input.split(' ').join(''); //to make sure he doenst have blanc space
  let userReq = await fetch(`${root}${input}`);
  userReq = await userReq.json();
  if (!userReq.id) return errorHandle('not such profil');
  safe(displayCard, userReq);
}
async function displayCard(user) {
  const imgEl = create('img');
  imgEl.src = `${user.avatar_url}`;
  const pName = create('p');
  pName.innerText = `name:${user.name}`;
  const pRepos = create('p');
  pRepos.innerText = `public repos:${user.public_repos}`;
  const card = create('a');
  card.href = `${user.html_url}`;
  card.classList.add('card');
  card.appendChild(imgEl);
  card.appendChild(pName);
  card.appendChild(pRepos);
  cardDiv.appendChild(card);
}
function safe(func, input) {
  func(input).catch(errorHandle);
}
function errorHandle(error) {
  alert(`you have an error: ${error}`);
}
