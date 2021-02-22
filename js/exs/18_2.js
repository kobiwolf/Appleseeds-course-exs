let conatiner = document.createElement('div');
conatiner.classList.add('container');
conatiner.style.backgroundColor = 'grey';
conatiner.style.height = '100vh';
conatiner.style.width = '100vw';
conatiner.style.display = 'flex';
conatiner.style.justifyContent = 'center';

let page = document.createElement('div');
page.classList.add('page1');
page.style.backgroundColor = 'darkgrey';
page.style.width = '70vw';
page.style.display = 'flex';
page.style.flexDirection = 'column';
page.style.alignItems = 'center';

let h1 = document.createElement('h1');
h1.innerText = 'hello';
h1.style.color = 'black';

let h2 = document.createElement('h2');
h2.style.color = 'white';
h2.innerText = "I'm an h2 element";

let div_pic = document.createElement('div');
div_pic.style.width = '70%';

let img1 = document.createElement('img');
img1.src = 'https://picsum.photos/150';
img1.addEventListener('mouseover', () => {
  img1.style.opacity = '0.4';
  img1.style.cursor = 'pointer';
});
img1.addEventListener('mouseleave', () => {
  img1.style.opacity = '1';
});

let list = document.createElement('ul');
list.style.listStyle = 'none';
list.style.color = 'lightgrey';
for (let i = 1; i <= 5; i++) {
    let li{i}="nevermind"
}

div_pic.appendChild(img1);
page.appendChild(h1);
page.appendChild(h2);
page.appendChild(div_pic);
conatiner.appendChild(page);
document.body.appendChild(conatiner);
