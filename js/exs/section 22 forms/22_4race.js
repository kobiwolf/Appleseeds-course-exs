let end = false;
window.addEventListener('keyup', (e) => {
  if (end) return;
  let key = e.key;
  let active1 = document.querySelector('#player1-race >.active');
  let active2 = document.querySelector('#player2-race >.active');
  switch (key) {
    case 'ArrowRight':
      active1.nextElementSibling.classList.add('active');
      active1.classList.remove('active');
      if (active1.nextElementSibling.classList.length > 1) {
        alert('THE RED CAR WON!!');
        endGame();
        end = true;
      }
      break;

    case 'ArrowLeft':
      if (!active1.previousElementSibling) return;
      active1.previousElementSibling.classList.add('active');
      active1.classList.remove('active');
      break;

    case 'ArrowUp':
      active2.nextElementSibling.classList.add('active');
      active2.classList.remove('active');
      if (active2.nextElementSibling.classList.length > 1) {
        alert('THE YELLOW CAR WON!!');
        endGame();
        end = true;
      }
      break;

    case 'ArrowDown':
      if (!active2.previousElementSibling) return;
      active2.previousElementSibling.classList.add('active');
      active2.classList.remove('active');
      break;
  }
});
function endGame() {
  if (confirm('would you like another game?')) window.reload();
}
