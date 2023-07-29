import shotMarker from '../../img/shot-marker.svg';

function createShotImg(imgPath) {
  const point = document.createElement('img');
  point.classList.add('shot-img');
  point.src = imgPath;
  return point;
}

function getTargetCellElement(y, x) {
  return document.querySelector(`div.rival-grid [data-y='${y}'][data-x='${x}']`);
}

function checkPosition(gameboard, position) {
  return gameboard.board[position].isShot ? false : true;
}

function rivalWaterGrid(bot) {
  const gridContainer = document.querySelector('.rival-grid');
  for (let i = 0; i < bot.gameBoard.board.length; i++) {
    const gridElement = document.createElement('div');
    gridElement.dataset.y = Math.floor(i / 10);
    gridElement.dataset.x = (i / 10).toString().split('.')[1] || 0;
    gridElement.classList.add('grid-cell');

    gridElement.addEventListener('click', (e) => {
      if (!e.target.matches('.grid-cell')) return;
      let targetPosition;
      let x = e.target.dataset.x;
      let y = e.target.dataset.y;

      if (+y < 1) {
        targetPosition = x;
      } else if (+y > 0 && +y < 10) {
        targetPosition = y + x;
      }

      if (checkPosition(bot.gameBoard, targetPosition)) {
        setTimeout(() => {
          let cellCoordinats = getTargetCellElement(e.target.dataset.y, e.target.dataset.x);
          cellCoordinats.appendChild(createShotImg(shotMarker));
          bot.fireShot(targetPosition, bot.gameBoard);
        }, 300);
      } else return;
    });

    gridContainer.appendChild(gridElement);
  }
}

export default rivalWaterGrid;
