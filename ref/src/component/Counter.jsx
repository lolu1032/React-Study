import { useRef } from "react";

export default function Counter({handleClick}) {
  
    return (
      <button onClick={handleClick}>
        Click me!
      </button>
    );
  }
  