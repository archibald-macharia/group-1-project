import React,{useState} from 'react'
import { userStories } from './data';
import Story from './Story';

function StoriesList(){
    const [stories,setStories] = useState(userStories)
    return(
        <div className="story-lists">
            {stories.map((story) => 
            <Story key={story} userStory={story}/>
            )}
        </div>
    );
}

export default StoriesList;