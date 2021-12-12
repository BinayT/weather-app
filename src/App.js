import {Container} from 'react-bootstrap'
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getWeather} from './redux/actions/weatherActions'
import Navbar from './components/Navbar/Navbar'

function App() {
  const dispatch = useDispatch();
  const userSelection = useSelector(state=>state.userSelection)

  useEffect(()=>{
    userSelection.city !== null && dispatch(getWeather(userSelection.city))
    console.log('ok')
  },[userSelection])

  return (
    <Container>
      <Navbar />
      {userSelection.city}
    </Container>
  );
}

export default App;
