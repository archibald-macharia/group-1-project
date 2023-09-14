import React, { useEffect, useState } from 'react';
import Card from './Counsellor_Card';

function Counsellors () {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch data from db.json when the component mounts
    fetch('http://localhost:8002/cards') // Assuming you have an endpoint on your server to retrieve card data
      .then((response) => response.json())
      .then((data) => {
        setCardData(data); // Set the retrieved data to the cardData state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array means this effect runs once, similar to componentDidMount

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
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            name={card.name}
            bio={card.aboutMe}
          />
        ))}
      </div>
    </div>
  );
};

export default Counsellors;