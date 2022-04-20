import { useState, useEffect } from "react";
import { buildBoard, nextBoard } from "/src/utilities/Board";

export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared
}) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns })); // calls the functions
  // the effect catches the changes made
  useEffect(() => {
    setBoard((previousBoard) =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared
      })
    );
  }, [player, resetPlayer, addLinesCleared]);

  return [board];
};
