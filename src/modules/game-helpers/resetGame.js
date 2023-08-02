import { hideWinnerScreen } from '../game-window/winnerScreen';
import { resetBattlegrounds } from '../createBattleground';
import { resetTurns } from './turnToggler';

function restartGame([player, bot]) {
  hideWinnerScreen();
  resetBattlegrounds([player, bot]);
  resetTurns();
}

export default restartGame;
