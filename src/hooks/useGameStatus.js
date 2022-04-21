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

  const addLinesCleared = useCallback((lines) => {
    setGameStatus((previous) => {
      const points = previous.points + lines * 100;
      const { linesPerLevel } = previous;
      const newLinesCompleted = previous.linesCompleted + lines;
      const level =
        newLinesCompleted >= linesPerLevel
          ? previous.level + 1
          : previous.level;
      const linesCompleted = newLinesCompleted % linesPerLevel;

      return {
        level,
        linesCompleted,
        linesPerLevel,
        points
      };
    }, []);
  }, []);

  return [gameStatus, addLinesCleared];
};
