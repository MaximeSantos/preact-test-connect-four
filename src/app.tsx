import { signal } from '@preact/signals';

import Board from './components/Board/Board';

import './app.css';

// Goals :
// - Create a simple connect four app
//    - 6 rows of 7 cells
//    - turn based
//    - align 4 cells of the same color to win
// - Try out signals ?

export function App() {
  const currentPlayer = signal('red');

  return (
    <>
      <h1>Connect Four</h1>
      <h2>
        {/* Allows us to capitalise first letter */}
        {currentPlayer.value.charAt(0).toUpperCase() + currentPlayer.value.slice(1)} turn
      </h2>
      <Board currentPlayer={currentPlayer} />
    </>
  );
}
