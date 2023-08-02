import './index.html';
import './index.scss';
import { renderBattleground } from './modules/createBattleground';
import initPlayers from './modules/game-helpers/initPlayers';

renderBattleground(initPlayers());
