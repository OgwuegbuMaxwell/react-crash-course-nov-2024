import React, { useState } from 'react'

const LearnConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [status, setStatus] = useState(false)

  return (
    <>
        {
            isLoggedIn ? (
                <h3>Welcome, User</h3>
            ) : (
                <h3>Please Log in</h3>
            )
        }


        {/* Do something only if the condition is true, else do nothing */}
        {
            status && (
                <h3>Show some data</h3>
            )
        }
    </>
  )
}

export default LearnConditionalRendering