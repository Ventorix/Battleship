const winnerScreen = document.querySelector('.winner-screen');
const winnerText = document.querySelector('.winner-text');
const overlay = document.querySelector('.overlay');

function showWinnerScreen(text) {
  winnerScreen.classList.remove('hide');
  overlay.classList.remove('hide');
  winnerText.textContent = `${text}`;
}

function hideWinnerScreen() {
  winnerScreen.classList.add('hide');
  overlay.classList.add('hide');
}

export {showWinnerScreen, hideWinnerScreen};
