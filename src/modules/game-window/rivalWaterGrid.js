import shotMarker from '../../img/shot-marker.svg';

function createShotImg(imgPath, state) {
  const point = document.createElement('img');
  point.classList.add('shot-img');
  point.classList.add(`${state}`);
  point.src = imgPath;
  return point;
}

function checkWin(player) {
  if (player.ships.length > 0) {
    return;
  } else typeMessage(`${player.name} win`);
}

function setShipHit(bot, targetPosition) {
  targetPosition = Number(targetPosition);

  bot.ships.forEach((ship) => {
    if (ship.position.includes(targetPosition)) {
      ship.hit(targetPosition);
      if (ship.isSunk()) {
        typeMessage(`${ship.name} is sunk`);
        bot.removeShip(ship.name);
        console.log(bot.ships);
      } else typeMessage('hit');
    }
  });
}

function typeMessage(message) {
  let text = document.querySelector('.game-text');
  text.textContent = message;
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

          if (bot.gameBoard.board[targetPosition].hasShip !== false) {
            bot.fireShot(targetPosition, bot.gameBoard);
            bot.gameBoard.board[targetPosition].isShot = true;
            cellCoordinats.appendChild(createShotImg(shotMarker, 'hit'));
            setShipHit(bot, targetPosition);
            checkWin(bot);
          } else if (bot.gameBoard.board[targetPosition].hasShip === false) {
            bot.fireShot(targetPosition, bot.gameBoard);
            bot.gameBoard.board[targetPosition].isShot = true;
            cellCoordinats.appendChild(createShotImg(shotMarker, 'miss'));
            typeMessage('miss');
          }
        }, 300);
      } else return;
    });

    gridContainer.appendChild(gridElement);
  }
}

export default rivalWaterGrid;
