import { useState, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "minus":
            return state - 1;
        case "multiply":
            return state * action.payload;
        default:
            return state;
    }
}


export default function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);
    const [count, setCount] = useState(0);

    const handleAddClick = () => {
        setCount(count + 1);
    }

    const handleMinusClick = () => {

    }

    const handleClick = () => {
        setCount(count + 1);
    }

    console.log(count);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>+ 1 더하기 </button>
        </div>
    );
}