import React, { useEffect, useState } from 'react';
import Card from './Counsellor_Card';

function Counsellors () {
  const [cardData, setCardData] = useState([]);

  const fetchData = () => {
    return fetch('http://localhost:8002/cards') 
    .then((response) => response.json())
    .then((data) => {
      setCardData(data); 
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  useEffect(() => {
    fetchData()
  }, []); 


  return (
    <div>
      <h1>Meet the counsellors</h1>
      <div className="card-list" style={{
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
      }}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            card={card}
            imageUrl={card.imageUrl}
            name={card.name}
            bio={card.aboutMe}
            likes={card.likes}
            fetchData={fetchData}
          />
        ))}
      </div>
    </div>
  );
};

export default Counsellors;
