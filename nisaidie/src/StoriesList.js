
import React,{useState, useEffect} from 'react';
import Story from './Story';
import NewStoryPopup from './NewStoryPopup';

function StoriesList(){
    const [stories, setStories] = useState([])
    const [formPopup, setFormPopup] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/userStories")
        .then((r) => r.json())
        .then((fetchData) => setStories(fetchData))
        .catch(error => {console.error('Fetch Error:', error)})
    },[])

    function handleAddStory(newStory){
        setStories([...stories,newStory])
    }

    return(
        <div className="story-lists">
            <h1>Inpirational stories</h1>
            <div>
                <button className='btn' onClick={() => setFormPopup(true)}>Add your own story</button>
                <NewStoryPopup trigger={formPopup} setTrigger={setFormPopup} onAddStory={handleAddStory}/>
            </div>
            {stories.map((userStory, index) => 
            <Story key={index} firstName={userStory.Firstname} lastName={userStory.Lastname} userStory={userStory.Story} />
            )}
            
        </div>
    );
}

export default StoriesList;