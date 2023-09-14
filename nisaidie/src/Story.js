import React from 'react';

function Story({firstName, lastName ,userStory}) {

    return (
        <div className='card-container'>
        <div className='card-content'>
                <h3 className='card-name'>{firstName} {lastName}</h3>
                <p className='card-body'>{userStory}</p>
            </div>
            </div>
    );
}

export default Story;