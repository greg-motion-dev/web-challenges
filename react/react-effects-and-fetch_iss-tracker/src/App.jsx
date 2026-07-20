import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  //lift getISSCoords up, outside of useEffect as getISSCoords is being used in the timer already, which sits in useEffect.
  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setCoords({ longitude: data.longitude, latitude: data.latitude });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getISSCoords(); // to prevent the 5 seconds delay at the start
    // run every 5 seconds
    const intervalId = setInterval(() => {
      getISSCoords();
    }, 5000);

    // cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
