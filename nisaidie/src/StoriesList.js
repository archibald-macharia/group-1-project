import React,{useState} from 'react'
import Story from './Story';

function StoriesList(){
    return(
        <div className="story-lists">
            {stories.map((story) => 
            <Story key={story} userStory={story}/>
            )}
        </div>
    );
}

export default StoriesList;