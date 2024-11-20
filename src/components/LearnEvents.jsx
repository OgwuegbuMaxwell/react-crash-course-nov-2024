import React from 'react'

const LearnEvents = () => {
    const handleClick = () => {
        console.log("Button Clicked")
    }

    const handleClickAgain = (param) => {
        console.log(param)
    }


  return (
    <>
        <button onClick={handleClick}>Click Me</button>
        <br />
        <button onClick={() => handleClickAgain("Clicked Again")}>Click Again</button>
    </>
  )
}

export default LearnEvents