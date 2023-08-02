async function typeMessage(message, delay = 100) {
  let text = document.querySelector('.game-text');
  let string = '';
  let letters = message.split('');
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    string += letters[i];
    text.textContent = string;
    i++;
  }
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default typeMessage;
