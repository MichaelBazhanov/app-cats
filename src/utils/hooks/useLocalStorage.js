import { useEffect, useState } from "react";

export function useLocalStorage(initialValue, key) {
  const getValue = () => {
    const storage = localStorage.getItem(key); // string || null

    // распарсим строку в массив(обьект)
    if (storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  // update value
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
