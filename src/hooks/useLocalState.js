import { useEffect, useState } from 'react';

export function useLocalState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initialValue; }
    catch (error) { console.error('Could not read local state', { key, error }); return initialValue; }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (error) { console.error('Could not save local state', { key, error }); }
  }, [key, value]);
  return [value, setValue];
}
