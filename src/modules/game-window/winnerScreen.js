const winnerScreen = document.querySelector('.winner-screen');
const winnerText = document.querySelector('.winner-text');
const overlay = document.querySelector('.overlay');

function showWinnerScreen(text, winner) {
  winnerScreen.classList.remove('hide');
  overlay.classList.remove('hide');
  winnerText.classList.add(`${winner}-text`);
  winnerText.textContent = `${text}`;
}

function hideWinnerScreen() {
  winnerScreen.classList.add('hide');
  overlay.classList.add('hide');
  winnerText.className = 'winner-text';
}

export { showWinnerScreen, hideWinnerScreen };
