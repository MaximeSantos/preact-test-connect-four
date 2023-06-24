export const nbRows = 6;
export const nbCols = 7;

export const createEmptyBoard = () => {
  const board = [];
  for(let row = 0; row < nbRows; row++){
    const currentRow = [];

    for(let col = 0; col < nbCols; col++){
      currentRow.push('empty');
    }

    board.push(currentRow);
  }
  return board;
}
