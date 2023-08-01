import computerAI from './computerAI';
import drawMarkers from '../game-window/drawMarkers';
import typeMessage from '../game-window/gameMessage';
import checkWinner from './checkWinner';
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
          } else typeMessage('hit');
        } else typeMessage('miss');

        bot.fireShot(shotLocation, playerGameboard);
        drawMarkers(playerGameboard, side);
        nextTurn();
      }, 1000);
    }
  } else typeMessage(`${player.name} win!`);
}

export default computerTurn;
