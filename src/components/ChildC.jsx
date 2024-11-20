import React from 'react'

const ChildC = (props) => {
  return (
    <>
        <div>ChildC - {props.stock}</div>
        <div>stock name was passed from: </div>
        <p>App.jsx TO ChildA.jsx</p>
        <p>ChildA.jsx TO ChildB.jsx</p>
        <p>ChildB.jsx TO ChildC.jsx</p>
    </>
  )
}

export default ChildC