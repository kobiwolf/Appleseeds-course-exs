let hour = document.querySelector('#hour');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
function sec() {
  seconds.innerText = parseInt(seconds.innerText) + 1;
  if (parseInt(seconds.innerText) === 60) {
    seconds.innerText = 0;
    minutes.innerText = parseInt(minutes.innerText) + 1;
  }
  if (parseInt(minutes.innerText) === 60) {
    minutes.innerText = 0;
    hour.innerText = parseInt(minutes.innerText) + 1;
  }
  if (parseInt(hour.innerText) === 24) {
    hour.innerText = 0;
  }
}
setInterval(sec, 1000);
