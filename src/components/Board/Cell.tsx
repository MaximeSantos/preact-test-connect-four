interface Cell {
  rowIndex: number;
  colIndex: number;
  currentCell: string;
}

const Cell = ({ rowIndex, colIndex, currentCell }: Cell) => {
  return <div className={`cell ${currentCell}`}></div>;
};

export default Cell;
