import React from 'react';

function Story({firstName, lastName ,userStory, onDeleteCard, storyId}) {

    function removeCard(){
        fetch(`http://localhost:8002/userStories/${storyId}`,{
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteCard(userStory))
    }
    
    return (
        <div className='card-container'>
        <div className='card-content'>
                <button className='delete-btn' onClick={() => removeCard(storyId)}>X</button>
                <h3 className='card-name'>{firstName} {lastName}</h3>
                <p className='card-body'>{userStory}</p>
            </div>
            </div>
    );
}

export default Story;
