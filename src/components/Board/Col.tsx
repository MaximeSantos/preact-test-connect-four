import Cell from "./Cell";

interface ColProps {
  colNumber: number;
}

const Col = ({ colNumber }: ColProps) => {
  const handleClickPlay = () => {
    console.log("Clicked Play");
  };

  return (
    <div className="col">
      <span className="colNumber">{colNumber}</span>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <button onClick={handleClickPlay} className="button">
        Play
      </button>
    </div>
  );
};

export default Col;
