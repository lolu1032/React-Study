import { useState } from "react";
import { Board } from "./Board/Board";
import "./index.css";

function App() {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("O");
  const [winner, setWinner] = useState(null);

  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (nextState) => {
    for (let [a, b, c] of winLines) {
      if (
        nextState[a] &&
        nextState[a] === nextState[b] &&
        nextState[a] === nextState[c]
      ) {
        return nextState[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (boardState[index] || winner) return;

    const nextState = [...boardState];
    nextState[index] = turn;

    setBoardState(nextState);

    const win = checkWinner(nextState);
    if (win) {
      setWinner(win);
    } else {
      setTurn((prev) => (prev === "O" ? "X" : "O"));
    }
  };

  const handleReset = () => {
    setBoardState(Array(9).fill(null));
    setTurn("O");
    setWinner(null);
  };

  return (
    <>
      <h2>{winner ? `${winner} 승리!` : `현재 턴: ${turn}`}</h2>
      <div className="board-grid">
        {boardState.map((value, index) => (
          <Board
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button className="reset-btn" onClick={handleReset}>초기화</button>
    </>
  );
}

export default App;
