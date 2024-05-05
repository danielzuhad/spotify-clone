"use client";

import { useState, useEffect } from "react";

// Custom Hook to handle debouncing
function useDebounce(value: string, delay: number): string {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Return a cleanup function that will be called every time useEffect is re-called
    // This happens either when value or delay changes (see the second parameter to useEffect)
    // The cleanup function uses clearTimeout to cancel the timeout if the value or delay changes
    // This is necessary to avoid setting the state after the component has been unmounted
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
}

export default useDebounce;
