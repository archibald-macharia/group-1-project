import React from 'react';

function Story({userStory}) {
    const {name, story} = {userStory}
    return (
        <div>
            <h3>{name}</h3>
            <p>{story}</p>
        </div>
    );
}

export default Story;