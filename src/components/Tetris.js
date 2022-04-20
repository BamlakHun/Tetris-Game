import "./Tetris.css";

import Previews from "/src/components/Previews";
import Board from "/src/components/Board";
import GameController from "/src/components/GameController";
import GameStatus from "/src/components/GameStatus";

import { useBoard } from "/src/hooks/useBoard";
import { useGameStatus } from "/src/hooks/useGameStatus";
import { usePlayer } from "/src/hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStatus, addLinesCleared] = useGameStatus();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared
  });

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStatus gameStatus={gameStatus} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStatus={gameStatus}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Tetris;
