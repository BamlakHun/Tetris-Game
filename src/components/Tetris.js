import "./Tetris.css";

import Board from "/src/components/Board";
import GameStatus from "/src/components/GameStatus";
import { useBoard } from "/src/hooks/useBoard";
import { useGameStatus } from "/src/hooks/useGameStatus";
const Tetris = ({ rows, columns, setGameOver }) => {
  //cretae a game status --> addlines that are cleared
  const [gameStatus, addLinesCleared] = useGameStatus(); // get values from hooks
  const [board, setBoard] = useBoard({ rows, columns });

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStatus gameStatus={gameStatus} />
    </div>
  );
};

export default Tetris;
