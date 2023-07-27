import Ship from '../shipFactory';
import Gameboard from '../gameboardFactory';
import shipTypes from './shipTypes';

function placeComputerShips(gameBoard) {
  const tempBoard = new Gameboard(gameBoard.board);
  const ships = [];

  shipTypes.forEach((shipType) => {
    const ship = new Ship(shipType.name, tempBoard.findRandomShipLocation(shipType));
    ship.position.forEach((pos) => (tempBoard.board[pos].hasShip = ship.name));
    ships.push(ship);
  });
}

export default placeComputerShips;
