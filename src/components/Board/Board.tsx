import { Signal, signal } from '@preact/signals';
import { createEmptyBoard } from '../../utils/emptyBoard';

import Cell from './Cell';
import Button from './Button';

import './Board.css';

interface Board {
  currentPlayer: Signal<string>;
}

const Board = ({ currentPlayer }: Board) => {
  const board = signal(createEmptyBoard());

  // creates a list of JSX elements according to the array stored in the board signal
  const listOfCells = board.value.map((currentRow, rowIndex) => (
    <div class="row" key={rowIndex}>
      {currentRow.map((currentCell, colIndex) => (
        <Cell
          rowIndex={rowIndex}
          colIndex={colIndex}
          currentCell={currentCell}
          key={colIndex}
        />
      ))}
    </div>
  ));

  const listOfButtons = board.value[0].map((_currentCol, colIndex) => (
    <Button board={board} col={colIndex} currentPlayer={currentPlayer}></Button>
  ));

  const handleClickPlay = () => {
    const newBoard = board.value.map((row: string[]) => [...row]);
    for (let row = 5; row >= 0; row--) {
      console.log('ICI', board.value, row, 0, 'red');
      if (newBoard[row][0] == 'empty') {
        console.log('On passe dans le if');
        newBoard[row][0] = 'red';
        break;
      }
    }

    console.log('Nouveau board avant de le set', newBoard);
    board.value = newBoard;
    console.log('Nouveau board après le set', board.value);

    if (currentPlayer.value === 'red') {
      currentPlayer.value = 'yellow';
    } else if (currentPlayer.value === 'yellow') {
      currentPlayer.value = 'red';
    }
  };

  console.log('LE BOARD', board.value);

  return (
    <div class="board">
      {listOfCells}
      <div class="row">{listOfButtons}</div>
      <button onClick={handleClickPlay}>TEST</button>
    </div>
  );
};

export default Board;
