const MAX_LENGTH = 5;
const MIN_LENGTH = 2;

const trimLength = (length) => {
  if (length > MAX_LENGTH) return MAX_LENGTH;
  if (length < MIN_LENGTH) return MIN_LENGTH;

  return length;
};

export default class Ship {
  constructor(name, size, hits = 0) {
    this.name = name;
    this.size = trimLength(size);
    this.hits = hits;
  }

  hit() {
    console.log('hit');
    return ++this.hits;
  }

  isSunk() {
    if (this.size <= this.hits) {
      console.log('sunk');
      return true;
    } else {
      console.log('not sunk');
      return false;
    }
  }
}
