import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import Card from '../../components/Card/Card'
import UserSelection from '../../components/UserSelection/UserSelection'

const Home = () => {
    const weatherForecast = useSelector(state=>state.weatherForecast)

    const userSelection = useSelector(state=>state.userSelection)
    const {city, timeframe} = userSelection
    return (
        <>
            <UserSelection city={city} timeframe={timeframe} />
            <Container style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                {
                (Object.keys(weatherForecast).length !== 0 && weatherForecast.result) && 
                (timeframe === 'Today' ? 
                (<Card data={weatherForecast.result.list[0]} />)
                : 
                (weatherForecast.result.list.slice(0,5).map(el=><Card data={el} />))
                )
                }
            </Container>
        </>
    )
}

export default Home
