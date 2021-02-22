let img = document.createElement('img');
img.style.width = '100px';
img.style.height = '100px';
img.src =
  'https://images.freeimages.com/images/large-previews/104/smily-tennis-ball-1185275.jpg';
let but = document.querySelector('button');
let input = document.querySelector('input');
but.style.display = 'block';
function print() {
  if (!input.value > 0) {
    alert('not a number greater then 0!try agien');
  } else {
    let b = document.querySelector('img');
    while (b) {
      b.remove();
      b = document.querySelector('img');
    }
    for (let i = 1; i <= input.value; i++) {
      let a = img.cloneNode();
      document.body.appendChild(a);
    }
  }
}
but.addEventListener('click', print);
