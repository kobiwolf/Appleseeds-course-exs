let input = document.querySelector("[name='input']");
let but = document.querySelector('button');
let p = document.querySelector('p');

function checkAge() {
  input.value > 18
    ? (p.innerText = 'you can dreak')
    : (p.innerText = "you're too young");
}
but.addEventListener('click', checkAge);
