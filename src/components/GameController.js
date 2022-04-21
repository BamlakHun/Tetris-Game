import "./GameController.css";

import { useDropTime } from "/src/hooks/useDropTime";
import { Action, actionForKey } from "/src/utilities/Input";
import { playerController } from "/src/utilities/PlayerController";
import { useInterval } from "/src/hooks/useInterval";
import { actionIsDrop } from "../utilities/Input";

const GameController = ({
  board,
  gameStatus,
  player,
  setGameOver,
  setPlayer
}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStatus
  });

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  //control key up
  const onKeyUp = ({ code }) => {
    const action = actionForKey(code); // more generalize
    //if(code == "KeyQ"){ // if key Q in placed quit back to menu
    if (actionIsDrop(action)) resumeDropTime();
  };

  // control key down
  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);
    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();

      if (!dropTime) {
        return;
      }
      handleInput({ action });
    }
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
