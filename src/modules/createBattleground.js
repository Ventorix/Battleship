import placeComputerShips from './game-helpers/placeComputerShips';
import friendlyWatersGrid from './game-window/playerWaterGrid';
import rivalWaterGrid from './game-window/rivalWaterGrid';

const randomButton = document.querySelector('.random-button');
const playerGrid = document.querySelector('.player-grid');

function getTargetCellElement(y, x) {
  return document.querySelector(`div.player-grid [data-y='${y}'][data-x='${x}']`);
}

function clearCells(grid) {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function randomPlaceShips(player) {
  clearCells(playerGrid);
  player.gameBoard.resetGameboard();
  friendlyWatersGrid(player);
  placeComputerShips(player.gameBoard);
  renderShips(player.gameBoard);
}

function renderBattleground(player, bot) {
  randomButton.addEventListener('click', () => randomPlaceShips(player));

  placeComputerShips(bot.gameBoard);
  friendlyWatersGrid(player);
  rivalWaterGrid(bot);
}

function renderShips(gameboard) {
  let ships = gameboard.getShipsLocation();
  let y, x, node, shipName;

  ships.forEach((elem) => {
    if (elem < 10) {
      y = 0;
      x = elem.toString().split('')[0];
    } else {
      y = elem.toString().split('')[0];
      x = elem.toString().split('')[1];
    }

    shipName = gameboard.board[elem].hasShip;
    node = getTargetCellElement(y, x);
    node.classList.add('ship-tile');
    node.classList.add(`${shipName}`);
  });
  console.log(gameboard.board);
}
export default renderBattleground;
