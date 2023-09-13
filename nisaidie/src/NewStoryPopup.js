import React, {useState} from 'react';

function newStoryForm({trigger, setTrigger, onAddStory}) {
    const [name,setName] = useState("")
    const [message,setMessage] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        const formData = {
            Name: name,
            Story: message
        }
        fetch("http://localhost:3000/userStories",{
            method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
        })
        .then((r) => r.json)
        .then((newStory) => onAddStory(newStory))
    }

    return (trigger) ? (
        <div className='pop-up-container'>
          <div className='pop-up-content'>
            <button className='pop-up-btn' onClick={() => setTrigger(false)}>X</button>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="message">Story:</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>

            <button type="submit">Submit</button> 
            </form>
          </div>           
        </div>
    ) : ""
}

export default newStoryForm;