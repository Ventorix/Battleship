import playerTurn from '../game-helpers/playerTurn';
function rivalWaterGrid(player, bot) {
  const gridContainer = document.querySelector('.rival-grid');
  for (let i = 0; i < bot.gameBoard.board.length; i++) {
    const gridElement = document.createElement('div');
    gridElement.dataset.y = Math.floor(i / 10);
    gridElement.dataset.x = (i / 10).toString().split('.')[1] || 0;
    gridElement.classList.add('grid-cell');

    gridElement.addEventListener('click', (e) => playerTurn(e, player, bot));
    gridContainer.appendChild(gridElement);
  }
}

export default rivalWaterGrid;
