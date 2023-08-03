const numContainers = document.querySelectorAll('.number-container');
const letterContainers = document.querySelectorAll('.letter-container');

function createNumbers(container) {
  for (let i = 1; i <= 10; i++) {
    const number = document.createElement('div');
    number.textContent = i;
    number.classList.add('number');
    container.appendChild(number);
  }
}

function createLetters(container) {
  const alpha = Array.from(Array(10)).map((e, i) => i + 65);

  for (let i = 0; i < alpha.length; i++) {
    const letter = document.createElement('div');
    letter.textContent = String.fromCharCode(alpha[i]);
    letter.classList.add('letter');
    container.appendChild(letter);
  }
}

function setBoardNotation() {
  numContainers.forEach((elem) => createNumbers(elem));
  letterContainers.forEach((elem) => createLetters(elem));
}

export default setBoardNotation;
