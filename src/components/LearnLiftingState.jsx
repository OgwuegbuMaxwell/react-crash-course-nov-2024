import React from 'react'

const LearnLiftingState = (props) => {
    const handleClick = () => {
        let stockName = 'Microsoft'

        props.getMyStock(stockName)
    }



  return (
    <>
        <h3>Lifiting State Up</h3>

        <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default LearnLiftingState