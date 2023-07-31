import Gameboard from './gameboardFactory';

class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.gameBoard = new Gameboard();
  }

  fireShot(location, gameboard) {
    if (gameboard.opponentBoard()[location] === 'empty') {
      gameboard.receiveShot(location);
    }
  }

  removeShip(name) {
    this.ships = this.ships.filter((ship) => ship.name !== name);
  }
}

export default Player;
