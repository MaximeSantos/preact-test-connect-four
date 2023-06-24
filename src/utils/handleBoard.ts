export const findLowestCell = (board: any, col: number, currentPlayer: string) => {
  // while loop in reverse, which  stops when currentRow reaches 0
  for (let row = board.value.length; row >= 0; row--) {
    console.log('ICI', board.value, col, row, currentPlayer);
    if (board.value[0][0] === 'empty') {
      console.log('ON PASSE DANS LE IF');
      return board.value[row][col];
    }
  }
};

// export const colourLowestCell = (board: any, col: number, currentPlayer: string) => {
//   for (let row = board.value.length; row >= 0; row--) {
//     // console.log(board.value[0][0]);
//     if (board.value[0][0] == 'empty') {
//       // console.log('row/col', row, col);
//       board.value[row][col] = 'red';
//     }
//   }
// };
// export const colourLowestCell = (board: any, col: number, currentPlayer: string) => {
//   // while loop in reverse, which  stops when currentRow reaches 0
//   let lowestCell = findLowestCell(board, col, currentPlayer);
//   lowestCell = `${currentPlayer}`;
// };
