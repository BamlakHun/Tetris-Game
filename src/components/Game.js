import Menu from "/src/components/Menu";
import Tetris from "/src/components/Tetris";
import { useGameOver } from "/src/hooks/useGameOver";

const Game = ({ rows, columns }) => {
  //<p>
  // rows {rows}, columns {columns}
  //</p>;
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const start = () => resetGameOver();

  return (
    <div className="Game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};
export default Game;
