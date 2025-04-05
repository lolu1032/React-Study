import { useEffect, useState } from "react";

// Write your custom Hook in this file!
export const useCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const id = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return <>
        {count}
    </>
}