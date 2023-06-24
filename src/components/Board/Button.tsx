import { Signal } from '@preact/signals';

interface Button {
  board: any;
  col: number;
  currentPlayer: Signal<string>;
}

const Button = ({ board, col, currentPlayer }: Button) => {
  const handleClickPlay = () => {
    const newBoard = board.value.map((row: string[]) => [...row]);
    for (let row = board.value.length - 1; row >= 0; row--) {
      console.log('ICI', board.value, col, row, 'red');
      if (newBoard[row][col] == 'empty') {
        console.log('On passe dans le if');
        newBoard[row][col] = 'red';
        break;
      }
    }
    console.log('Nouveau board avant de le set', newBoard);
    board.value = newBoard;
    console.log('Nouveau board après le set', board.value);
  };

  return (
    <button onClick={handleClickPlay} class="button">
      Play
    </button>
  );
};

export default Button;
