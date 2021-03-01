let area = document.querySelector('.area');
let but = document.querySelector('button');
function checkWordsLengths() {
  console.log(area.value.split(' '));
  if (area.value.split(' ').length < 100) {
    let p = document.querySelector('p');
    p.innerText = 'you must write at list 100 words';
  }
}
but.addEventListener('click', checkWordsLengths);
