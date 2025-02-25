import { useState } from "react";

export function useCounter(initialState) {
    const [count, setCount] = useState(initialState);

    const add = () => setCount(count + 1);
    const minus = () => setCount(count - 1);
    const multiply = (number => setCount(count * number));

    return { count, add, minus, multiply } // object type으로 return
}