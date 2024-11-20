import React, {useState} from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

  return (
    <>
        <h3>Count: {count}</h3>

        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Count</button>
        <button onClick={resetCount}>Reset Count</button>
    </>
  )
}

export default CounterApp