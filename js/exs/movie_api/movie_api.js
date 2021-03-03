const myApiKey = 'efb19f26';
const root = ` http://www.omdbapi.com/?apikey=${myApiKey}&r=json&t=`;
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
  let movieReq = await fetch(`${root}${input}`);
  movieReq = await movieReq.json();
  console.log(movieReq);
  if (movieReq.Error) errorHandle(movieReq.Error);
  else {
    safe(displayCard, movieReq);
  }
}
function addRating(ratings) {
  let arr = [];
  ratings.forEach((el) => {
    arr.push(`from:${el.Source},rating:${el.Value} `);
  });
  return arr;
}

async function displayCard(movie) {
  let info = create('p');
  const ratings = addRating(movie.Ratings);
  info.innerHTML = `title:${movie.Title} <br>
     Genre:${movie.Genre}<br>
    Year:${movie.Year}<br>
    Plot:${movie.Plot}<br>
    Director:${movie.Director}<br>
    ${ratings.join('<br>')}`;
  const card = create('a');
  card.style.backgroundImage = `url(${movie.Poster})`;
  card.href = `#`;
  card.classList.add('card');
  card.appendChild(info);
  cardDiv.appendChild(card);
}
function safe(func, input) {
  func(input).catch(errorHandle);
}
function errorHandle(error) {
  alert(`you have an error: ${error}`);
}
