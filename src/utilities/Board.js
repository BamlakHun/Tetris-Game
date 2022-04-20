import { defaultCell } from "/src/utilities/Cell";
import { transferToBoard } from "/src/utilities/Tetrominoes";

export const buildBoard = ({ rows, columns }) => {
  // take the rows ans columns
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns }
  };
};
//  exportb functions
export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
  const { tetromino, position } = player;

  // Copy and clear spaces used by pieces that
  // hadn't collided and occupied spaces permanently
  // if it is occupied keep it, we only require to clear it
  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );
  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.isFastDropping,
    position,
    rows,
    shape: tetromino.shape
  });

  // Return the next board
  return {
    rows,
    size: { ...board.size }
  };
};
