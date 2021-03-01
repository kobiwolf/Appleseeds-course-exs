let body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh';
body.style.backgroundColor = 'lightgrey';

let div = document.createElement('div');
div.style.width = '700px';
div.style.height = '500px';
div.style.border = '1px black solid';
div.style.borderRadius = '20px';
div.style.backgroundColor = 'white';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';

let h1 = document.createElement('h1');
h1.innerText = 'Text To Copy:';
h1.style.marginBottom = '0px';

let h2 = document.createElement('h2');
h2.innerText = '123456';

let divCode = document.createElement('form');
divCode.style.height = '250px';
divCode.style.width = '450px';
divCode.style.marginTop = '40px';
let arrOfInput = [];
for (let i = 0; i < 6; i++) {
  let input = document.createElement('input');
  input.dataset.input = `${i}`;
  input.type = 'text';
  input.style.height = '50px';
  input.style.width = '50px';
  input.style.border = '1px black lightgrey';
  input.style.marginRight = '10px';
  input.style.fontSize = '20px';
  input.maxLength = '1';
  divCode.appendChild(input);
  input.addEventListener('input', (e) => {
    if (i < 5 && e.target.value)
      document.querySelector(`[data-input='${i + 1}']`).focus();
  });
  arrOfInput.push(input);
}
let but = document.createElement('button');
but.type = 'Submit';
but.innerText = 'Verefy';
but.style.color = 'white';
but.style.backgroundColor = 'black';
but.style.marginLeft = '200px';
but.style.marginTop = '100px';

divCode.appendChild(but);
div.appendChild(h1);
div.appendChild(h2);
div.appendChild(divCode);
body.appendChild(div);

but.addEventListener('mouseover', () => {
  but.style.cursor = 'pointer';
});
arrOfInput.forEach((v) =>
  v.addEventListener('paste', (e) => {
    let data = e.clipboardData.getData('text').split('');
    let atri = e.target.getAttribute('data-input')
    for(let i=atri;i<6;i++){
      if(data[i-atri])document.querySelector(`[data-input='${i}']`).value=data[i-atri]
    }
  })
);
document.querySelector(`[data-input='5']`).addEventListener('input',(e)=>{
  let booli=true
  arrOfInput.forEach(input=>{
    if(!input.value)booli=false
})
if(booli)arrOfInput.forEach(v=> v.value ="")
})
