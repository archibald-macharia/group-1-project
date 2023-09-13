import React, {useState} from 'react';

function newStoryForm({trigger, setTrigger, onAddStory}) {
    //const [formData,setFormData] = useState({})
  

    return (trigger) ? (
        <div className='pop-up-container'>
          <div className='pop-up-content'>
            <button className='pop-up-btn' onClick={() => setTrigger(false)}>X</button>
            
          </div>           
        </div>
    ) : ""
}

export default newStoryForm;