import placeComputerShips from './game-helpers/placeComputerShips';
import friendlyWatersGrid from './game-window/playerWaterGrid';
import rivalWaterGrid from './game-window/rivalWaterGrid';
import renderShips from './game-window/renderShips';

const randomButton = document.querySelector('.random-button');
const playerGrid = document.querySelector('.player-grid');

function clearCells(grid) {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function randomPlaceShips(player) {
  clearCells(playerGrid);
  player.gameBoard.resetGameboard();
  friendlyWatersGrid(player);
  placeComputerShips(player.gameBoard, player);
  renderShips(player.gameBoard);
}

function renderBattleground(player, bot) {
  randomButton.addEventListener('click', () => randomPlaceShips(player));
  placeComputerShips(bot.gameBoard, bot);
  friendlyWatersGrid(player);
  rivalWaterGrid(player, bot);
  randomPlaceShips(player);
}

export default renderBattleground;
