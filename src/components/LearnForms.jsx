import React, { useState } from 'react'

const LearnForms = () => {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const handleLastName = (e) => {
    //     setLastName(e.target.value)
    // }

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('Form Submitted', formData)
    }


  return (
    <>
        {/* <form action="">
            First Name: <input type="text" name='firstName' onChange={handleFirstName} value={firstName} />
            <br /><br />
            Last Name: <input type="text" name='lastName' onChange={handleLastName} value={lastName} />
        </form> */}

        <form action="" onSubmit={handleFormSubmit}>
            First Name: <input type="text" name='firstName' onChange={handleChange}  value={formData.firstName} />
            <br /><br />
            Last Name: <input type="text" name='lastName' onChange={handleChange}  value={formData.lastName} />

            <br /><br />
            <input type="submit" value="Submit"/>
        </form>
    </>
  )
}

export default LearnForms