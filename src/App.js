// import countries from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import { Routes, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails';
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {

    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((res) => {
        setCountries(res.data)
      })
      .catch((err) => {
        console.log(err)
      })


  }, [])


  return (
    <div className="App">

      <Navbar />

      <div className="container">

        <div className="landing">

          <CountriesList countries={countries} />



          <Routes>

            <Route path='/:id' element={<CountryDetails countries={countries} />} />

          </Routes>

        </div>
      </div>







    </div>

  );
}

export default App;