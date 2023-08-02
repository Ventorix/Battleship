import Player from '../factories/playerFactory';

function initPlayers() {
  let player = new Player('Player');
  let bot = new Player('Robot');
  return [player, bot];
}

export default initPlayers;
