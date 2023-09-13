import React from 'react'
import placeholder from "./profile.png"

const url = "http://localhost:3001/counsellors"


function Counsellors(){
    const [pData, setData] = React.useState([])

    React.useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    }, [])
    return(
        <div style={{
            display: 'flex', 
            flexDirection: "row", 
            justifyContent: "center"
        }}>

    {pData.map(datum=>
        <div className="card" style={{width: "18rem", margin: "1em"}}>
        <img src={placeholder} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{datum.name}</h5>
            <p className="card-text">{datum.aboutMe}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )}
    </div>
    );
}

export default Counsellors;