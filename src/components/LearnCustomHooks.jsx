import React from 'react'
import useCounter from '../hooks/useCounter'

const LearnCustomHooks = () => {
    const {count, increament, decreament,reset} = useCounter(5)
  return (
    <>
        <h3>Count: {count}</h3>
        <button onClick={increament}>Increament</button>
        <button onClick={decreament}>Decreament</button>
        <button onClick={reset}>reset</button>
    </>
  )
}

export default LearnCustomHooks