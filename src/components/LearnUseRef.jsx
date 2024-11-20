import React, { useState, useRef } from 'react'

const LearnUseRef = () => {
    const [name, setName] = useState('')
    const refElement = useRef('')
    const previousNameRef = useRef('')

    console.log(refElement)

    const clearText = () => {
        setName("")
        refElement.current.focus()
    }


    const handleInput = (e) => {
        previousNameRef.current = name
        setName(e.target.value)
    }

  return (
    <>
        <input ref={refElement} type="text" value={name} onChange={handleInput} />
        <button onClick={clearText}>Clear</button>

        <p>Previous Name: {previousNameRef.current}</p>
    </>
  )
}

export default LearnUseRef