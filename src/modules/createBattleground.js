import placeComputerShips from './game-helpers/placeComputerShips';
import friendlyWatersGrid from './game-window/playerWaterGrid';
import rivalWaterGrid from './game-window/rivalWaterGrid';
import renderShips from './game-window/renderShips';
import restartGame from './game-helpers/resetGame';
import setBoardNotation from './game-window/boardNotation';

const playerGrid = document.querySelector('.player-grid');
const computerGrid = document.querySelector('.rival-grid');

function clearCells(grid) {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function setButtonListeners([player, bot]) {
  const restartButton = document.querySelector('.restart-btn');
  const randomButton = document.querySelector('.random-button');
  // randomButton.addEventListener('click', () => randomPlaceShips(player));
  restartButton.addEventListener('click', () => restartGame([player, bot]));
}

function resetBattlegrounds([player, bot]) {
  clearCells(playerGrid);
  clearCells(computerGrid);
  player.gameBoard.resetGameboard();
  bot.gameBoard.resetGameboard();
  friendlyWatersGrid(player);
  rivalWaterGrid(player, bot);
  placeComputerShips(bot);
  randomPlaceShips(player);
}

function randomPlaceShips(player) {
  clearCells(playerGrid);
  player.gameBoard.resetGameboard();
  friendlyWatersGrid(player);
  placeComputerShips(player);
  renderShips(player.gameBoard);
}

function renderBattleground([player, bot]) {
  placeComputerShips(bot);
  friendlyWatersGrid(player);
  rivalWaterGrid(player, bot);
  randomPlaceShips(player);
  setButtonListeners([player, bot]);
  setBoardNotation();
}

export { renderBattleground, resetBattlegrounds };
