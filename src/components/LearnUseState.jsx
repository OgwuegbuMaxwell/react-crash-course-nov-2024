import {useState} from 'react'

const LearnUseState = () => {
    const [num, setNum] = useState(5)

    const handleNum = () => {
        setNum(10)
    }


    const [stockPrice, setStockPrice] = useState({stock: 'Apple', price: 500})
    // console.log(stockPrice)
    const updateStockPrice = () => {
        setStockPrice({...stockPrice, price: 800})
    }



  return (
    <>
        <h4><small>Number: {num}</small></h4>
        <button onClick={handleNum}>Click Here</button>

        <h3>Print Stock Details:</h3>
        <h4>{stockPrice.stock} : {stockPrice.price}</h4>
        <button onClick={updateStockPrice}>Update Stock Price</button>
        
    </>
  )
}

export default LearnUseState