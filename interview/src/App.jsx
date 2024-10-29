import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicComponent from './components/BasicComponent';
import Counter from './components/Counter';
import Form from './components/Form';
import Navbar from './components/Navbar';
import FruitList from './components/FruitList';
import ConditionalRendering from './components/ConditionalRendering';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = 'a9f771449dde48e9b7490637242810';

  const userAuthentication = false;    //! used for conditional rendering

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`
        );
        setData(response.data.location);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <Navbar/>   {/* q6. This is question no 6 answer , visit file */}
      <br />
      <br />
      <BasicComponent /> {/*q3. this is answer of question no 3 , visit file  */}
      <br /><br />
       <Counter />    {/* q4. This question no 4 counter problem, visit counter.jsx */}
      <br /><br />
      <Form />       {/* q5. this is answer of question no 5 form handling, visit file */}
      <br /><br />
      {isLoading ? (
        <p>Loading weather data...</p>
      ) : error ? (
        <p>Error: {error}</p>  
      ) : data ? (
        <div>
          <h2>Weather in {data.name}, {data.region} ({data.country})</h2>   {/*q5. Data fetching to weather of any country  */}
        </div>
      ) : null}
<br /><br />
      <FruitList />   {/* q8. creating fruit list */}


      {userAuthentication?<ConditionalRendering/>:<h3>11.  example of conditional rendiring, User is not authenticated, make user authenticated first to see the content</h3>}    {/* q11. this is question no 11, conditional rendring */}


    </div>
  );
}

export default App;