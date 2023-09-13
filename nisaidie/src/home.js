import React, {useState,useEffect} from 'react'


function Home(){
    const [pData, setData] = useState([])

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
    return(
        <div >
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Nisaidie</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

            <div style={{
                minHeight: "80vh",
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




            {/*  */}
            <div style={{
                    display: 'flex', 
                    flexDirection: "row", 
                    justifyContent: "center"
                }}>

            {pData.map((datum)=>(
                <div className="card" style={{width: "18rem", margin: "1em"}}>
                <img src={datum.imageUrl} className="card-img-top" alt="..."/>
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