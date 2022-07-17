import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Counter</div>
            <div data-testid="count-value">{count}</div>
            <button data-testid="add-button" onClick={() => setCount(count + 1)}>ADD</button>
            <button data-testid="reduce-button" onClick={() => setCount(count - 1)}>REDUCE</button>

        </>
    )
}


export default Counter;