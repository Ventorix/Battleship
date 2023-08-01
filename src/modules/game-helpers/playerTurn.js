import drawMarkers from '../game-window/drawMarkers';
import computerTurn from './computerTurn';
import typeMessage from '../game-window/gameMessage';
import checkWinner from './checkWinner';
import { nextTurn, getTurn } from './turnToggler';

function checkPosition(gameboard, position) {
  return gameboard.board[position].isShot ? false : true;
}

function playerTurn(e, player, bot) {
  let turn = getTurn();
  const computerGameboard = bot.gameBoard;
  const side = 'rival';

  if (!e.target.matches('.grid-cell')) return;
  if (!checkWinner([player, bot])) {
    if (turn) {
      let targetPosition;
      let x = e.target.dataset.x;
      let y = e.target.dataset.y;

      if (+y < 1) {
        targetPosition = x;
      } else if (+y > 0 && +y < 10) {
        targetPosition = y + x;
      }

      if (checkPosition(computerGameboard, targetPosition)) {
        const shotLocation = +targetPosition;
        if (computerGameboard.checkIfShotHit(shotLocation)) {
          const newShips = { ...bot }.ships;
          const hitShip = newShips.find(
            (ship) => ship.name === computerGameboard.checkIfShotHit(shotLocation),
          );
          hitShip.hit(shotLocation);

          if (hitShip.isSunk()) {
            typeMessage(`${hitShip.name} is sunk`);
          } else typeMessage('hit');
          player.fireShot(targetPosition, computerGameboard);
          drawMarkers(computerGameboard, side);
        } else {
          typeMessage('miss');
          player.fireShot(targetPosition, computerGameboard);
          drawMarkers(computerGameboard, side);
          nextTurn();
          computerTurn(player, bot);
        }
      }
    }
  } else typeMessage(`${bot.name} win!`);
}

export default playerTurn;
