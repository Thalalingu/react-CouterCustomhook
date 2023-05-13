import useCounter from './useCounter';
import React from 'react';

export default function App() {
  const { count, increment} = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
