let turn = true;
let playerTurn = true;
let computerTurn = false;

function nextTurn() {
  if (turn === playerTurn) {
    turn = false;
  } else if (turn === computerTurn) {
    turn = true;
  }
}

function getTurn() {
  return turn;
}

function resetTurns() {
  turn = true;
}

export { nextTurn, getTurn, resetTurns };
