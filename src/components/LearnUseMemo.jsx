import {useMemo, useState} from 'react'

const LearnUseMemo = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(1000000000)


    const increaseCount = () => {
        if (count === 10) {
            setNumber(999999999)
        }
        setCount(count + 1)
    }

    // const sumOfNumbers = () => {
    //     let sum = 0;
    //     for(let i=1; i<=number; i++){
    //         sum += i 
    //     }  
        
    //     return sum
    // }

    // Use Memo
    const sumOfNumbers = useMemo(()=>{
        let sum = 0;
        for(let i=1; i<=number; i++){
            sum += i 
        }  

        return sum
    }, [number])

    console.log(`Sum of numbers from 1 to ${number}: `, sumOfNumbers)


  return (
    <>
        <h3>Count: {count}</h3>
        <button onClick={increaseCount}>Increase Count</button>
    </>
  )
}

export default LearnUseMemo