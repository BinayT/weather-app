import {useState, useEffect} from 'react';

import {getWeatherData} from './utils/apiUtils';

function App() {

  const [weatherData, setWeatherData] = useState([]);

  useEffect(()=>{
    if (weatherData.length !== 0) return; 
    const getWeatherDataa = async () => {
      const data = await getWeatherData('madrid')
      setWeatherData(data)
    }
    getWeatherDataa()
  })

  return (
    <div className="App">
      ok
    </div>
  );
}

export default App;
