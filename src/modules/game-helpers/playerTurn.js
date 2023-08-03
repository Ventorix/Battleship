import computerTurn from './computerTurn';
import typeMessage from '../game-window/gameMessage';
import checkWinner from './checkWinner';
import { showWinnerScreen } from '../game-window/winnerScreen';
import { nextTurn, getTurn } from './turnToggler';
import convertCoordinates from './coordinateConvertor';
import { drawMarkers, getTargetCellElement } from '../game-window/drawMarkers';

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

            for (let i = 0; i < hitShip.position.length; i++) {
              let node = getTargetCellElement(convertCoordinates(hitShip.position[i]), 'rival');
              node.classList.add('ship-tile');
              node.classList.add(`${hitShip.name}`);
            }

            if (checkWinner([player, bot])) {
              showWinnerScreen(`${player.name} win!`, 'player');
            }
          } else typeMessage('hit');
          player.fireShot(targetPosition, computerGameboard);
          drawMarkers(computerGameboard, side);
        } else {
          typeMessage('miss');
          player.fireShot(targetPosition, computerGameboard);
          drawMarkers(computerGameboard, side);
          nextTurn();
          setTimeout(() => {
            computerTurn(player, bot);
          }, 500);
        }
      }
    }
  }
}

export default playerTurn;
