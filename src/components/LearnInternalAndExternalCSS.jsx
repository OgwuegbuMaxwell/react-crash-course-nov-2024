import React from 'react'
import '../assets/css/style.css'

const LearnInternalAndExternalCSS = () => {
  return (
    <>
        
        {/* Internal CSS */}
        <h4>Internal CSS</h4>
        <style>
            {`
                .container {
                    background-color: skyblue;
                    height: 100px;
                    width: 100px
                }
            
            `}
            
        </style>
        <div  className='container'>

        </div>

        {/* External CSS */}
        <h4>External CSS </h4>

        <div className='yellowbox'>

        </div>
        <h3 className='yellowtext'>Yellow Text</h3>
    
    </>
  )
}

export default LearnInternalAndExternalCSS