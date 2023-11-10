import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number): T {
    // state and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
    
        // Cancel the timeout if value changes (also on delay change or unmount)
        return () => {
          clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}