import Ship from '../factories/shipFactory';
import Gameboard from '../factories/gameboardFactory';
import shipTypes from './shipTypes';

function placeComputerShips(player) {
  const tempBoard = new Gameboard(player.gameBoard.board);
  const ships = [];

  shipTypes.forEach((shipType) => {
    const ship = new Ship(shipType.name, tempBoard.findRandomShipLocation(shipType));
    ship.position.forEach((pos) => (tempBoard.board[pos].hasShip = ship.name));
    ships.push(ship);
  });

  player.ships = ships;
}

export default placeComputerShips;
