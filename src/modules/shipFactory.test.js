import Ship from './shipFactory';

describe('Ship methods test', () => {
  test('Hit ship reaction', () => {
    let ship = new Ship('craiser', 5, 2);
    expect(ship.hit()).toEqual(3); // Increase hit counter by 1
  });

  test('Sunk ship if hits >= ship length', () => {
    let ship = new Ship('craiser', 2, 5);
    expect(ship.isSunk()).toBeTruthy(); // Ship sunk
  });

  test('The maximum size of the ship should not exceed the limit', () => {
    let ship = new Ship('craiser', 22);
    expect(ship.size).toEqual(5); // 22 becomes 5 (max ship length limit)
  });

  test('The minimum size of the ship should not be under the limit', () => {
    let ship = new Ship('craiser', -22);
    expect(ship.size).toEqual(2); // -22 becomes 2 (min ship length limit)
  });
});
