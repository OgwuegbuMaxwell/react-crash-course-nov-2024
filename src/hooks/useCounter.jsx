import { useState } from "react";

function useCounter(initialVlaue=0) {
    const [count, setCount] = useState(initialVlaue)

    const increament = () => {
        setCount(count+1)
    }

    const decreament = () => {
        setCount(count-1)
    }

    const reset = () => {
        setCount(initialVlaue)
    } 

    return {
        count, 
        increament,
        decreament,
        reset
    }
}

export default useCounter