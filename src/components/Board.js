import "./Board.css";
import BoardCell from "/src/components/BoardCell";

const Board = ({ board }) => {
  //based on the rows and columns look at the total amount and setup CSS for each grid
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
  };

  //loop through every single cell we have
  return (
    <div className="Board" style={boardStyles}>
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </div>
  );
};

export default Board;
