import { useState } from 'react';

function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + step);
  }

  return { count, increment };
}

export default useCounter;
