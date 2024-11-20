import React from 'react'

const LearnInlineCSS = () => {
    const style = {
        container: {
            backgroundColor: "red",
            height: "100px",
            width: "100px"
        },

        h2Text: {
            fontSize: '40px',
            color: '#00ff00'
        }
    }
  return (
    <>
        <p style={{fontSize:'20px', fontWeight: 600, color: 'red'}}>Hello, this is a paragraph</p>

        <div style={style.container}>
            
        </div>

        <h2 style={style.h2Text}>My h2</h2>
    </>
  )
}

export default LearnInlineCSS