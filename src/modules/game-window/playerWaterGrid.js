function friendlyWatersGrid(player) {
  const gridContainer = document.querySelector('.player-grid');

  for (let i = 0; i < player.gameBoard.board.length; i++) {
    const gridElement = document.createElement('div');
    gridElement.dataset.y = Math.floor(i / 10);
    gridElement.dataset.x = (i / 10).toString().split('.')[1] || 0;
    gridElement.classList.add('grid-cell');
    gridContainer.appendChild(gridElement);
  }
}

export default friendlyWatersGrid;
