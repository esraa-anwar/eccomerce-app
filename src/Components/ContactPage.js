import React, { useState } from 'react'
import "./styles.scss"
const ContactPage = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const handleForm = (e) => {
        e.preventDefault();

        console.log(`email:${email}, name:${name}, message:${message}`)
        alert(`email:${email}, name:${name}, message:${message}`)
    }

    return (<>

        <div className='form-data'>
            <form onSubmit={handleForm} className='form'>
                <label>email</label>
                <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} />
                <label>message</label>
                <textarea value={message} onChange={(e) => {
                    setMessage(e.target.value)
                }} />
                <button type='submit'>submit</button>
            </form>
        </div>
    </>
    )
}

export default ContactPage