import computerAI from './computerAI';
import { drawMarkers } from '../game-window/drawMarkers';
import typeMessage from '../game-window/gameMessage';
import checkWinner from './checkWinner';
import { showWinnerScreen } from '../game-window/winnerScreen';
import { nextTurn, getTurn } from './turnToggler';

function computerTurn(player, bot) {
  let turn = getTurn();
  const side = 'player';
  const playerGameboard = player.gameBoard;
  if (!checkWinner([player, bot])) {
    if (!turn) {
      setTimeout(() => {
        const shotLocation = computerAI(player);

        if (playerGameboard.checkIfShotHit(shotLocation)) {
          const newShips = { ...player }.ships;
          const hitShip = newShips.find(
            (ship) => ship.name === playerGameboard.checkIfShotHit(shotLocation),
          );
          hitShip.hit(shotLocation);

          if (hitShip.isSunk()) {
            typeMessage(`${hitShip.name} is sunk`);
            drawMarkers(playerGameboard, side);

            if (checkWinner([player, bot])) {
              showWinnerScreen(`${bot.name} win!`, 'rival');
            }
          } else typeMessage('hit');
          bot.fireShot(shotLocation, playerGameboard);
          drawMarkers(playerGameboard, side);
          computerTurn(player, bot);
        } else {
          typeMessage('miss');
          bot.fireShot(shotLocation, playerGameboard);
          drawMarkers(playerGameboard, side);
          setTimeout(() => {
            nextTurn();
          }, 300);
        }
      }, 1000);
    }
  }
}

export default computerTurn;
