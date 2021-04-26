import './App.css';
import { useState } from "react";
function Cards({latitude, longitude}) {
    const [lat, setLat] = useState([latitude]);
    const [long, setLong] = useState([longitude]);
    const refreshLocation = async() =>{
        console.log("refresh location");
    };
    return (
        <div className="container">
            <h2>Hello, you're at {lat},{long}</h2>
            <button onClick={refreshLocation} className="btn">Refresh Location</button>
        </div>
    )
}

export default Cards
