import './index.html';
import './index.scss';
import renderGrid from './modules/createGameboard';
import Player from './modules/factories/playerFactory';

let player = new Player('Jojo');
renderGrid(player);
