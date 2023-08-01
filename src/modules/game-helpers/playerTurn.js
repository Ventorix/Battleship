import drawMarkers from '../game-window/drawMarkers';
import computerTurn from './computerTurn';

function typeMessage(message) {
  let text = document.querySelector('.game-text');
  text.textContent = message;
}

/* function checkWin(player) {
  if (player.ships.length > 0) {
    return;
  } else typeMessage(`${player.name} win`);
} */

function checkPosition(gameboard, position) {
  return gameboard.board[position].isShot ? false : true;
}

function setShipHit(bot, targetPosition) {
  targetPosition = Number(targetPosition);

  bot.ships.forEach((ship) => {
    if (ship.position.includes(targetPosition)) {
      ship.hit(targetPosition);
      if (ship.isSunk()) {
        typeMessage(`${ship.name} is sunk`);
        bot.removeShip(ship.name);
        console.log(bot.ships);
      } else typeMessage('hit');
    }
  });
}

function playerTurn(e, player, bot) {
  const gameboard = bot.gameBoard;
  const board = bot.gameBoard.board;
  const side = 'rival';

  if (!e.target.matches('.grid-cell')) return;
  let targetPosition;
  let x = e.target.dataset.x;
  let y = e.target.dataset.y;

  if (+y < 1) {
    targetPosition = x;
  } else if (+y > 0 && +y < 10) {
    targetPosition = y + x;
  }

  if (checkPosition(gameboard, targetPosition)) {
    setTimeout(() => {
      if (board[targetPosition].hasShip) {
        player.fireShot(targetPosition, gameboard);
        board[targetPosition].isShot = true;
        setShipHit(bot, targetPosition);
      } else if (!board[targetPosition].hasShip) {
        player.fireShot(targetPosition, gameboard);
        board[targetPosition].isShot = true;
        typeMessage('miss');
      }

      drawMarkers(gameboard, side);
    }, 300);
    computerTurn(player, bot);
  } else return;
}

export default playerTurn;
