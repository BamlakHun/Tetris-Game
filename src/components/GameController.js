import "./GameController.css";

import { Action, actionForKey } from "/src/utilities/Input";
import { playerController } from "/src/utilities/PlayerController";
import { useInterval } from "/src/hooks/useInterval";
const GameController = ({
  board,
  gameStatus,
  player,
  setGameOver,
  setPlayer
}) => {
  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, 1000);
  //control key up
  const onKeyUp = ({ code }) => {
    const action = actionForKey(code); // more generalize
    //if(code == "KeyQ"){ // if key Q in placed quit back to menu
    if (action === Action.Quit) {
      setGameOver(true);
    }
  };

  // control key down
  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);
    handleInput({ action });
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver
    });
  };
  return (
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus // sets gamecontroller focused
    />
  );
};

export default GameController;
