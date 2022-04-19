import { useState } from "react";
import { buildBoard } from "/src/utilities/Board";

export const useBoard = ({ rows, columns }) => {
  const [board] = useState(buildBoard({ rows, columns })); // calls the functions

  return [board];
};
