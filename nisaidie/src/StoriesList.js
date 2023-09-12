import React,{useState} from 'react'
import { userStories } from './data';
import Story from './Story';

function StoriesList(){
    const [stories,setStories] = useState(userStories)
    return(
        <div className="story-lists">
            
        </div>
    );
}

export default StoriesList;