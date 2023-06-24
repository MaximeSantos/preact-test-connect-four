interface Cell {
  rowIndex: number;
  colIndex: number;
  currentCell: string;
}

const Cell = ({ rowIndex, colIndex, currentCell }: Cell) => {
  console.log(rowIndex, colIndex, currentCell);
  return <div className={`cell ${currentCell}`}></div>;
};

export default Cell;
