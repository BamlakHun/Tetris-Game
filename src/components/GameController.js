const GameController = ({
  board,
  gameStatus,
  player,
  setGameOver,
  setPlayer
}) => {
  //control key up
  const onKeyUp = ({ code }) => {
    console.log(`onKeyUp ${code}`);
  };

  // control key down
  const onKeyDown = ({ code }) => {
    console.log(`onKeyDown ${code}`);
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
