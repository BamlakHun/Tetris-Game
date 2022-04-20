import { defaultCell } from "/src/utilities/Cell";

export const buildBoard = ({ rows, columns }) => {
  // take the rows ans columns
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns }
  };
};
