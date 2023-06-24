import { signal } from '@preact/signals';
import { createEmptyBoard } from '../../utils/emptyBoard';
import Cell from './Cell';
import './Board.css';
import Button from './Button';

const Board = () => {
  const board = signal(createEmptyBoard());
  // const currentPlayer = signal('');

  // creates a list of JSX elements according to the array stored in the board signal
  const listOfCells = board.value.map((currentRow, rowIndex) => (
    <div className="row" key={rowIndex}>
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

  const listOfButtons = board.value[0].map((currentCol, colIndex) => (
    <Button col={colIndex}></Button>
  ));

  console.log('liste des boutons', listOfButtons);

  return (
    <div className="board">
      {listOfCells}
      <div className="row">{listOfButtons}</div>
    </div>
  );
};

export default Board;
