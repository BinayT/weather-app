import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getWeather} from './redux/actions/weatherActions'

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(state=>state.weatherForecast)

  useEffect(()=>{
    Object.keys(weatherData).length === 0 && dispatch(getWeather())
  })

  return (
    <div className="App">
      ok
    </div>
  );
}

export default App;
