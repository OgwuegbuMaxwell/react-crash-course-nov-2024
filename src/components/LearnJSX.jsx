import React from 'react'


const h2Element = React.createElement("h2", null, "Learn JSX")



const LearnJSX = () => {

    let stock = 'Tesla'


  return (
    <>
        {/* {h2Element} */}
        <h2>JSX</h2>

        <h2>Price: {10 + 60}</h2>

        <h2>Stock name: {stock}</h2>

        <h2 className='bg-success'>How to create class in JSX</h2>

        <h2 className={stock}>Dynamic Class</h2>
    </>
  )
}

export default LearnJSX