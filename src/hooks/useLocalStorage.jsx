import { useState } from 'react';

export function useLocalStorage(key, initialState) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialState;
        } catch (error) {
            console.error(error);
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setValue(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }

    const removeValue = () => {
        try {
            window.localStorage.removeItem(key);
            setStoredVAlue(initialState);

        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue, removeValue];
}