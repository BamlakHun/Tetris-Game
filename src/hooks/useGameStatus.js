import { useState, useCallback } from "react";

const buildGameStatus = () => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0
});

//
export const useGameStatus = () => {
  const [gameStatus, setGameStatus] = useState(buildGameStatus());

  const addLinesCleared = useCallback(() => {}, []);
  return [gameStatus, addLinesCleared];
};
