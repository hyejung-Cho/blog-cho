// src\hooks\useBoolean.jsx
import { useCallback, useState } from "react";
// const {value, setValue, setTrue, setFalse, toggle} = useBoolean(false)

export default function useBoolean(initialValue) {
  if (typeof initialValue !== "boolean") initialValue = false;
  const [value, setInnerValue] = useState(initialValue);

  const setValue = useCallback((v) => {
    if (typeof v !== "boolean") setInnerValue(false);
    else setInnerValue(v);
  }, []);

  const setTrue = useCallback(() => setInnerValue(true), []);
  const setFalse = useCallback(() => setInnerValue(false), []);
  const toggle = useCallback(() => setInnerValue((v) => !v), []);

  return { value, setValue, setTrue, setFalse, toggle };
}
