import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Função para obter o valor inicial do localStorage
  const getSavedValue = () => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  };

  const [value, setValue] = useState(getSavedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
