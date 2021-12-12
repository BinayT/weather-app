import {Container} from 'react-bootstrap'
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getWeather} from './redux/actions/weatherActions'
import Navbar from './components/Navbar/Navbar'

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(state=>state.weatherForecast)

  useEffect(()=>{
    Object.keys(weatherData).length === 0 && dispatch(getWeather())
  })

  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;
