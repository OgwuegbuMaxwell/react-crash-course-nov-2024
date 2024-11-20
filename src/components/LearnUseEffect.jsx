import {useEffect, useState} from 'react'

const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const [randomNum, setRandomNum] = useState(0)



    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    const generateRandomNum = () => {
        const randomNum = Math.floor(Math.random() * 100)
        // console.log(randomNum)
        setRandomNum(randomNum)
    }


    // UseEffect
    /*
    The useEffect hook in React is used to perform side effects in functional components. Side effects are operations 
    that interact with something outside the React component or modify the state 
    in ways that are not directly tied to rendering 
    (e.g., data fetching, subscriptions, timers, logging, etc.).

    //The Dependency Array
    //The second argument to useEffect (the dependency array)
       determines when the effect runs:

    // Empty Array ([]):
    Effect runs only once after the component mounts (similar to componentDidMount).

    // Specific Dependencies ([dep1, dep2]):
    Effect runs whenever any of the specified dependencies change (similar to componentDidUpdate).

    // No Array:
    Effect runs after every render, which can lead to performance issues if not used carefully.

    */
    useEffect(()=> {
        console.log("useEffect is called")


        /*
        A cleanup function in React's useEffect is used to clean up resources or 
        side effects that were set up in the effect. It is particularly important 
        for preventing memory leaks or unintended behavior when components unmount or dependencies change.

        */
        // Clean up function
        return () => {
            console.log('Cleanup fucntion is called')
        }
        
    }, [count, randomNum])

  return (
    <>
        <h3>Count: {count}</h3>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Count</button>
        <button onClick={resetCount}>Reset Count</button>

        <h3>Random Number: {randomNum}</h3>
        <button onClick={generateRandomNum}>Generate Random Number</button>

    </>
  )
}

export default LearnUseEffect