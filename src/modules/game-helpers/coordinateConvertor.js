function convertCoordinates(cellIndex) {
  let y, x;

  if (cellIndex < 10) {
    y = 0;
    x = cellIndex.toString().split('')[0];
  } else {
    y = cellIndex.toString().split('')[0];
    x = cellIndex.toString().split('')[1];
  }
  return [y, x];
}

export default convertCoordinates;
