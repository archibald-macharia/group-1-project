import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

function NewStoryPopup({trigger, setTrigger, onAddStory}) {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [message,setMessage] = useState("")

    function handleSubmit(event){
        event.preventDefault()

        const formData = {
          id: uuid(),
          Firstname: firstName,
          Lastname: lastName,
          Story: message

        }

        fetch("http://localhost:3000/userStories",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((newStory) => onAddStory(newStory))

        setFirstName("")
        setLastName("")
        setMessage("")
    }

    return (trigger) ? (
        <div className='pop-up-container'>
          <div className='pop-up-content'>
            <button className='pop-up-btn' onClick={() => setTrigger(false)}>X</button>
            <h5 className='form-title'>Add YourStory</h5>
            <form onSubmit={handleSubmit}>
            <label htmlFor="FirstName">First Name:</label>
            <input type="text" id="FirstName" placeholder='First Name' name="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

            <label htmlFor="LastName">Last Name:</label>
            <input type="text" id="LastName" placeholder='Last Name' name="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

            <label htmlFor='message'>Story:</label>
            <textarea id="message" name='message' value={message} onChange={(e) => setMessage(e.target.value)}/>

            <button type="submit" className='submit-btn'>Submit</button> 
            </form>
          </div>           
        </div>
    ) : ""
}

export default NewStoryPopup;