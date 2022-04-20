import { useState, useCallback } from "react";
import { randomTetromino } from "/src/utilities/Tetrominoes";

// build intial player, update the player
const buildPlayer = (previous) => {
  let tetrominoes;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.unshift(randomTetromino());
  } else {
    tetrominoes = Array(5) // create an array
      .fill(0) // fill those arrays with 0
      .map((_) => randomTetromino()); // create ranndom tetromino
  }

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop()
  };
};

export const usePlayer = () => {
  const [player, setPlayer] = useState(buildPlayer());
  //update
  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev));
  }, []);

  return [player, setPlayer, resetPlayer];
};
