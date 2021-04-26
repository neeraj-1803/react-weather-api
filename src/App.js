import './App.css';
import Cards from './Cards';
import { useEffect, useState } from 'react'

  function App() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
      const getLocation = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude); 
          setLong(position.coords.longitude)
        });
        console.log(process.env.REACT_APP_API_URL);
        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
           }
        })
        .then(res => res.json())
        .then(result=>{
          setData(result);
          console.log(JSON.stringify(result));
        })
      }
      getLocation();
    },[lat, long]);
    return (
      <div className="App">
        <Cards latitude={lat} longitude={long}/>
      </div>
    );
  }

export default App;
