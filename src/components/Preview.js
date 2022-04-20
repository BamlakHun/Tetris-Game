import "./Preview.css";
import React from "react";

import { buildBoard } from "/src/utilities/Board";
import { transferToBoard } from "/src/utilities/Tetrominoes";

import BoardCell from "/src/components/BoardCell";

const Preview = ({ tetromino, index }) => {
  // each tetromino shall have shape and classname
  const { shape, className } = tetromino;
  const board = buildBoard({ rows: 4, columns: 4 }); // we get the 4'4 board to display the preview tetrominos
  const style = { top: `${index * 15}vw` }; // set positions for upcoming tetrominos rendered at top

  board.rows = transferToBoard({
    // for previews board we want to transfer active tetromino
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape
  });
  // return preview
  // return the container, board , actual board
  return (
    <div className="Preview" style={style}>
      <div className="Preview-board">
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Preview);
