import React, {useState,useEffect} from 'react'
import './checklist.css';


function Home(){
    const [pData, setData] = useState([])
    const [selectedIllness, setSelectedIllness] = useState('');
    const [filteredData, setFilteredData] = useState(pData);


    useEffect(()=>{

    // Fetch data from db.json when the component mounts
    fetch('http://localhost:8002/cards') // Assuming you have an endpoint on your server to retrieve card data
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the retrieved data to the cardData state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    }, []);

      
        const handleIllnessChange = (event) => {
            setSelectedIllness(event.target.value);
        };

        console.log(selectedIllness);

        useEffect(() => {
            // Filter the data based on the selected illness
            if (selectedIllness === '') {
              setFilteredData(pData);
            } else {
              const filtered = pData.filter((item) =>
                item.mentalIllnesses.includes(selectedIllness)
              );
              setFilteredData(filtered);
            }
          }, [selectedIllness, pData]);


    return(
        <div >
            
            

            <div style={{
                minHeight: "40vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
                }}>
                <h1>Nisaidie</h1>
                <p
                style={{
                    width: "50%",
                    fontWeight: 500
                }}
                >Nisaidie is suicide prevention app designed to provide a supportive and accessible platform for individuals in crisis. It aims to promote mental health awareness, offer resources, and foster a sense of community and hope.</p>
            </div>


            <div >
             <h3>Tell us what you are going through</h3>
            <div className='checklist'>

            <div className="checkbox-list">
            <label>
              <input 
            type="checkbox"
            value="Depression"
            onChange={handleIllnessChange}
            checked={selectedIllness === 'Depression'}
             />
             Depression
              </label>
            </div>

            <div className="checkbox-list">
             <label>
              <input 
            type="checkbox"
            value="Anxiety"
            onChange={handleIllnessChange}
            checked={selectedIllness === 'Anxiety'}
              />
               Anxiety
             </label>
             </div>

             <div className="checkbox-list">
             <label>
              <input 
            type="checkbox"
            value="Personality disorder"
            onChange={handleIllnessChange}
            checked={selectedIllness === 'Personality disorder'}
              />
               Personality disorder
             </label>
                </div>

                <div className="checkbox-list">
             <label>
              <input 
            type="checkbox"
            value="PTSD"
            onChange={handleIllnessChange}
            checked={selectedIllness === 'PTSD'}
              />
               PTSD
             </label>   
             </div>   

              </div>


              </div>

            {/*  */}
            <div className='helpers'>Here's a friend(s) who can help you</div>
            <div style={{
                    display: 'flex', 
                    flexDirection: "row", 
                    justifyContent: "center"
                }}>

            {filteredData.map((datum)=>(
                <div className="card" style={{width: "18rem", margin: "1em"}}>
                <img src={datum.imageUrl} className="card-img-top" alt="..." height={200} width={150}/>
                <div className="card-body">
                    <h5 className="card-title">{datum.name}</h5>
                    <p className="card-text">{datum.aboutMe}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>)
            )}
            </div>
                        
        </div>
   
    );
}

export default Home;
