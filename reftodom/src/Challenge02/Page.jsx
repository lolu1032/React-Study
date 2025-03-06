import { useRef } from "react";

export default function Page() {
    let ref = useRef(null);
    function onClick() {
        ref.current.focus();
    }
    return (
      <>
        <nav>
          <button onClick={onClick}>Search</button>
        </nav>
        <input ref={ref}
          placeholder="Looking for something?"
        />
      </>
    );
  }