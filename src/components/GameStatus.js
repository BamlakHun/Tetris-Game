import React from "react";

import "./GameStatus.css";

const GameStatus = ({ gameStatus }) => {
  // create gameStatus which takes game status
  const { level, points, linesCompleted, linesPerLevel } = gameStatus; // pull thuys attrbutes from gameStatus
  const linesToLevel = linesPerLevel - linesCompleted; // then structure them

  return (
    <ul className="GameStatus GameStatus__right">
      <li>Level</li>
      <li className="value">{level}</li>
      <li>line</li>
      <li className="value">{linesToLevel}</li>
      <li>Points</li>
      <li className="value">{points}</li>
    </ul>
  );
};

export default React.memo(GameStatus); // update when game status is changed
