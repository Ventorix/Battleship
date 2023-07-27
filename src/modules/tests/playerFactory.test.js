import Player from '../factories/playerFactory';

describe('player functions', () => {
  let player;
  let testBoard;

  beforeEach(() => {
    player = new Player('Bebei');

    // create and fill mock opponent board
    testBoard = {
      oppBoard: [],
      receiveShot: jest.fn((loc) => {
        testBoard.oppBoard[loc] = 'miss';
        return true;
      }),

      opponentBoard: jest.fn(() => {
        return testBoard.oppBoard;
      }),
    };

    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push('empty');
    }
    testBoard.oppBoard = arr;
  });

  it('creates a player with a name', () => {
    expect(player.name).toBe('Bebei');
  });

  it('fires a shot to the gameboard', () => {
    player.fireShot(25, testBoard);
    expect(testBoard.receiveShot.mock.calls.length).toBe(1);
  });

  it('rejects shots fired at locations already fired upon', () => {
    testBoard.oppBoard[10] = 'miss';
    player.fireShot(25, testBoard);
    player.fireShot(10, testBoard);
    expect(testBoard.receiveShot.mock.calls.length).toBe(1);
  });
});
