import React from 'react'

const LearnMap = () => {
    const names = ['Maxwell', 'Chizoba', 'Mike', 'David']
  return (
    <>
        <ul>
            {names.map((name, index)=>(
                <li key={index}>
                    {name}
                </li>
            ))}
        </ul>
    </>
  )
}

export default LearnMap