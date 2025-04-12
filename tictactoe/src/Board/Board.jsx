export const Board = ({ value, onClick }) => {
    return (
      <div className="board" onClick={onClick}>
        {value}
      </div>
    );
  };
  