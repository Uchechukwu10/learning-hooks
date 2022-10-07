import React, { useState } from 'react'

function CounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
    </div>
  )
}

export default CounterTwo