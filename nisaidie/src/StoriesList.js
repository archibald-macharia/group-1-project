
import React,{useState, useEffect} from 'react';
import Story from './Story';
import NewStoryPopup from './NewStoryPopup';

function StoriesList(){
    const [stories, setStories] = useState([])
    const [formPopup, setFormPopup] = useState(false)
    
    function fetchStories(){
            return fetch('http://localhost:8002/userStories')
        .then((r) => r.json())
        .then((fetchData) => setStories(fetchData))
        .catch(error => {console.error('Fetch Error:', error)})
        };
    useEffect(() => {
        fetchStories()  
    },[stories])


    function handleAddStory(newStory){
        setStories([...stories,newStory])
    }
    
    function handleCardDelete(deletedCard){
        const filteredCards = stories.filter((story) => story.filter !== deletedCard.id )
        setStories(filteredCards)
    }

    return(
        <div className="story-lists">
            <h1>Inpirational stories</h1>
            <div>
                <button className='btn' onClick={() => setFormPopup(true)}>Add your own story</button>
                <NewStoryPopup trigger={formPopup} setTrigger={setFormPopup} onAddStory={handleAddStory}/>
            </div>
            {stories.map((userStory, index) => 
            <Story 
                key={index} 
                storyId={userStory.id}
                firstName={userStory.Firstname} 
                lastName={userStory.Lastname} 
                userStory={userStory.Story} 
                onDeleteCard={handleCardDelete}/>
            )}
            
        </div>
    );
}

export default StoriesList;
