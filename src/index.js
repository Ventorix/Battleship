import './index.html';
import './index.scss';
import renderBattleground from './modules/createBattleground';
import Player from './modules/factories/playerFactory';

let player = new Player('Jojo');
let bot = new Player('Robot');

renderBattleground(player, bot);
