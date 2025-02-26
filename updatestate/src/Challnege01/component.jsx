import { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
    setPending((n) => n + 1);
    await delay(3000);
    setPending((n) => n - 1);
    setCompleted((n)=> n + 1);
    }

    return (
    <>
        <h3>
        Pending: {pending}
        </h3>
        <h3>
        Completed: {completed}
        </h3>
        <button onClick={handleClick}>
        Buy
        </button>
    </>
    );
}

    function delay(ms) {
    return new Promise(resolve => {
    setTimeout(resolve, ms);
    });
}
