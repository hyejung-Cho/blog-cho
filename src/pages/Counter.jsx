import { useState, useReducer } from "react";
import { useCounter } from '../hooks/useCounter';


// function reducer(state, action) {
//     switch (action.type) {
//         case "increment":
//             return state + 1;
//         case "minus":
//             return state - 1;
//         case "multiply":
//             return state * action.payload;
//         default:
//             return state;
//     }
// }

export default function Counter() {
    const { count, add, minus, multiply } = useCounter(0); // object 선언

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={add}>+ 1 더하기 </button>
            <button onClick={minus}>- 1 빼기기 </button>
            <button onClick={() => multiply(3)}>* 3 곱하기 </button>
        </div >
    );
}
