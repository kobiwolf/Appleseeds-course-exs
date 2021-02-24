let start = document.querySelector('.start');
let stoper = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let hour = document.querySelector('#hour');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
function timeDown() {
  seconds.innerText = parseInt(seconds.innerText) - 1;
  if (parseInt(seconds.innerText) === -1) {
    seconds.innerText = 999;
    minutes.innerText = parseInt(minutes.innerText) - 1;
  }
  if (parseInt(minutes.innerText) === -1) {
    minutes.innerText = 59;
    hour.innerText = parseInt(hour.innerText) - 1;
  }
  if (parseInt(hour.innerText) === -1) {
    hour.innerText = 59;
  }
}
let clear;
start.addEventListener('click', () => {
  clear = setInterval(timeDown, 1);
});
stoper.addEventListener('click', () => clearInterval(clear));
reset.addEventListener('click', () => {
  location.reload();
});
