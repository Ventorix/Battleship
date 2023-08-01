import computerAI from './computerAI';
import drawMarkers from '../game-window/drawMarkers';

function computerTurn(player, bot) {
  const side = 'player';
  const playerGameboard = player.gameBoard;

  setTimeout(() => {
    const shotLocation = computerAI(player);
    if (playerGameboard.checkIfShotHit(shotLocation)) {
      const newShips = { ...player }.ships;
      const hitShip = newShips.find(
        (ship) => ship.name === playerGameboard.checkIfShotHit(shotLocation),
      );
      hitShip.hit(shotLocation);
    }
    bot.fireShot(shotLocation, playerGameboard);
    drawMarkers(playerGameboard, side);
  }, 1500);
}

export default computerTurn;
