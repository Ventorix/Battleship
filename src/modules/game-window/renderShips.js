import convertCoordinates from '../game-helpers/coordinateConvertor';

function getTargetCellElement([y, x]) {
  return document.querySelector(`div.player-grid [data-y='${y}'][data-x='${x}']`);
}

function renderShips(gameboard) {
  let ships = gameboard.getShipsLocation();
  let node, shipName;

  ships.forEach((elem) => {
    shipName = gameboard.board[elem].hasShip;
    node = getTargetCellElement(convertCoordinates(elem));
    node.classList.add('ship-tile');
    node.classList.add(`${shipName}`);
  });
}

export default renderShips;
