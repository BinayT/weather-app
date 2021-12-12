import {Container} from 'react-bootstrap'
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getWeather} from './redux/actions/weatherActions'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'

function App() {
  const dispatch = useDispatch();
  const userSelection = useSelector(state=>state.userSelection)

  useEffect(()=>{
    userSelection.city !== null && dispatch(getWeather(userSelection.city))
  },[userSelection])

  return (
    <Container>
      <Navbar />
      
      <Home />
    </Container>
  );
}

export default App;
