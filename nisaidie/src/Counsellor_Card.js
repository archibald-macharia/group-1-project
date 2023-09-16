import React, {useState, useEffect} from 'react'
import './Counsellor_card.css';

function Card ({card, fetchData}) {

  const [likeData, setLikes] = useState({likes:(card.likes)+1});

  function handleLikeClick(card) {

    setLikes({likes:(likeData.likes)+1})
  
    fetch(`http://localhost:8002/cards/${card.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likeData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      ;




  };
      useEffect(() => {
        fetchData()
      }, [likeData]); 
  
    return (
      <div className="counsellor-card" style={{width: 700}}>
        <div className="left-section">
          <img src={card.imageUrl} alt="Card" className="counsellor-card-image" height={150} width={150}/>
          <button onClick={() => handleLikeClick(card)} className="like-button">
            Like {card.likes}
          </button>
        </div>
        <div className="right-section">
          <h1 className="card-name">{card.name}</h1>
          <p className="counsellor-card-text">{card.aboutMe}</p>
        </div>
      </div>
    );
  };

export default Card;
