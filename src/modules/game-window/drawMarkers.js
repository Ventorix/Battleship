import shotMarker from '../../img/shot-marker.svg';
import convertCoordinates from '../game-helpers/coordinateConvertor';

function createShotImg(imgPath, state) {
  const point = document.createElement('img');
  point.classList.add('shot-img');
  point.classList.add(`${state}`);
  point.src = imgPath;
  return point;
}

function getTargetCellElement([y, x], side) {
  return document.querySelector(`div.${side}-grid [data-y='${y}'][data-x='${x}']`);
}

function checkMissCells(gameboard) {
  let shotCells = [];

  for (let i = 0; i < gameboard.board.length; i++) {
    if (gameboard.board[i].isShot === true) {
      shotCells.push(i);
    }
  }
  return shotCells;
}

function checkHitCells(gameboard) {
  let shotCells = [];

  for (let i = 0; i < gameboard.board.length; i++) {
    if (gameboard.board[i].isShot === true && gameboard.board[i].hasShip !== false) {
      shotCells.push(i);
    }
  }
  return shotCells;
}

function drawMarkers(gameboard, side) {
  let hitPlaces = checkHitCells(gameboard);
  let missPlaces = checkMissCells(gameboard);

  hitPlaces.forEach((cell) => {
    let targetCell = getTargetCellElement(convertCoordinates(cell), side);
    if (!targetCell.firstChild) {
      targetCell.appendChild(createShotImg(shotMarker, 'hit'));
    }
  });

  missPlaces.forEach((cell) => {
    let targetCell = getTargetCellElement(convertCoordinates(cell), side);
    if (!targetCell.firstChild) {
      targetCell.appendChild(createShotImg(shotMarker, 'miss'));
    }
  });
}

export default drawMarkers;
