let input = document.querySelector('input');
let img = document.querySelector('img');
img.style.opacity = '0';
function check() {
  if (input.checked) showPic();
  else hidePic();
}
function showPic() {
  img.style.opacity = '1';
}
function hidePic() {
  img.style.opacity = '0';
}
input.addEventListener('click', check);
