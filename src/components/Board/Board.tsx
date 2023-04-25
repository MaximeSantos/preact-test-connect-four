import Col from "./Col";
import "./Board.css";

const Board = () => {
  return (
    <div className="board">
      <Col colNumber={1} />
      <Col colNumber={2} />
      <Col colNumber={3} />
      <Col colNumber={4} />
      <Col colNumber={5} />
      <Col colNumber={6} />
      <Col colNumber={7} />
    </div>
  );
};

export default Board;
