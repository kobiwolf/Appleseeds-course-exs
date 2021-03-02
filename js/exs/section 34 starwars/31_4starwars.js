const get = (name) => document.querySelector(name);
const create = (type) => document.createElement(type);
const table = create('table');
const head = create('div');
const h1 = create('h1');
h1.innerText = 'StarWars';
head.appendChild(h1);
document.body.appendChild(head);
table.innerHTML =
  '<tr><th>name</th><th>height</th><th>planet</th><th>heir</th><th>population</th></tr>';
async function getData() {
  const startUrl = 'https://swapi.dev/api/people/';
  for (let i = 1; i < 11; i++) {
    const tr = create('tr');
    let peoplereq = await fetch(`${startUrl}${i}`);
    peoplereq = await peoplereq.json();
    let planetreq = await fetch(`${peoplereq.homeworld}`);
    planetreq = await planetreq.json();
    tr.innerHTML = `<tr> <th>${peoplereq.name}</th><th>${peoplereq.height}</th><th>${planetreq.name}</th><th>${peoplereq.hair_color}</th><th>${planetreq.population}</th> </tr>`;
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}
function safe(fn) {
  getData().catch((error) => console.log(`oooppp ${error}`));
}
safe(getData);
