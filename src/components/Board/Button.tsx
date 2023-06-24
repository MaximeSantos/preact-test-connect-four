interface Button {
  col: number;
}

const Button = ({ col }: Button) => {
  const handleClickPlay = () => {
    console.log('Clicked Play on col', col);
  };

  return (
    <button onClick={handleClickPlay} className="button">
      Play
    </button>
  );
};

export default Button;
