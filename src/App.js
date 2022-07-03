import './App.css';
import { fetchPlanetApiURL, fetchVehicleData } from './util/config';
import React, { useEffect, useState } from 'react';
import Navbar from './UI/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';

function App() {

  const [planetData, setPlanetData] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);
  const [error, setError] = useState('');

  // ----------- PLANET DATA -----------
  useEffect(() => {
    fetch(fetchPlanetApiURL)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Something went wrong while requesting posts');
      })
      .then((response) => {
        setPlanetData(response);
        // console.log(planetData);
      })
      .catch((error) => setError(error.message));
  }, []);

  // ----------- VEHICLE DATA -----------
  useEffect(() => {
    fetch(fetchVehicleData)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Something went wrong while requesting posts');
      })
      .then((response) => {
        setVehicleData(response);
        // console.log(vehicleData);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) <h1>API error</h1>

  return (
    <React.Fragment>
      <Navbar />
      <MainPage
        planet={planetData} />
    </React.Fragment>
  );
}

export default App;
