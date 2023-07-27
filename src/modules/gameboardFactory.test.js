import Gameboard from './gameboardFactory';
import shipTypes from './game-helpers/shipTypes';

describe('Gameboard methods', () => {
  let testBoard;
  beforeEach(() => {
    testBoard = new Gameboard();
  });

  it('initializes a gameboard with the appropriate amount of cells', () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({ hasShip: false, isShot: false });
    }
    expect(testBoard.board).toEqual(arr);
  });

  it('updates a cell when receiving a shot', () => {
    testBoard.receiveShot(22);
    expect(testBoard.board[22].isShot).toBe(true);
  });

  it('responds to a miss', () => {
    expect(testBoard.checkIfShotHit(25)).toBe(false);
  });

  it('confirms a hit', () => {
    testBoard.board[25].hasShip = true;
    expect(testBoard.checkIfShotHit(25)).toBe(true);
  });

  it('rejects ship placement that collides with other ships', () => {
    testBoard.board[12].hasShip = 'carrier';
    expect(testBoard.checkCollisions([2, 12, 22, 32])).toBe(false);
  });

  it('rejects ship placement that runs through map edge on x axis', () => {
    expect(testBoard.checkCollisions([8, 9, 10, 11, 12])).toBe(false);
  });

  it('rejects ship placement that runs through map edge on y axis', () => {
    expect(testBoard.checkCollisions([78, 88, 98, 108])).toBe(false);
  });

  it('returns the location array of a ship', () => {
    expect(testBoard.createLocationArray(23, shipTypes[4], 'y')).toEqual([23, 33]);
  });
});
