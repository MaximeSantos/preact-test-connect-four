import "./app.css";
import Board from "./components/Board/Board";

// Goals :
// - Create a simple connect four app
//    - 6 rows of 7 cells
//    - turn based
//    - align 4 cells of the same color to win
// - Try out signals ?

export function App() {
  return (
    <>
      <h1>Connect Four</h1>
      <h2>RED turn</h2>
      <Board />
    </>
  );
}
