let li = document.querySelector('.start-here');
li.innerText = 'main-title';
console.log(li);
let ul = li.nextElementSibling.firstElementChild;
let newli = document.createElement('li');
newli.innerText = 'sub title 4';
ul.appendChild(newli);
let liToDelete = ul.parentElement.nextElementSibling;
liToDelete.remove();
let title =
  li.parentElement.parentElement.previousElementSibling.lastElementChild;
console.log(title);
title.innerText = 'Master of dom';
let p = li.parentElement.nextElementSibling.firstElementChild;
p.innerText = 'wow you are amazing';
