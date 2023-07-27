import Ship from './shipFactory';

describe('Ship methods', () => {
  let testCarrier;
  let testSubmarine;

  beforeEach(() => {
    testCarrier = new Ship('carrier', [5, 6, 7, 8, 9]);
    testSubmarine = new Ship('submarine', [22, 23, 24]);
  });

  it('accepts a hit', () => {
    testCarrier.hit(0);
    expect(testCarrier.hits).toEqual([0]);
  });
  it('accepts multiple hits', () => {
    testSubmarine.hit(22);
    testSubmarine.hit(23);
    expect(testSubmarine.hits).toEqual([22, 23]);
  });
  it('shows that the boat is not sunk', () => {
    testCarrier.hit(5);
    testCarrier.hit(9);
    expect(testCarrier.isSunk()).toBe(false);
  });
  it('shows that a boat is sunk', () => {
    testSubmarine.hit(22);
    testSubmarine.hit(23);
    testSubmarine.hit(24);
    expect(testSubmarine.isSunk()).toBe(true);
  });
});
