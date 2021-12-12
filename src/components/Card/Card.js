import { Card } from "react-bootstrap"

import './style.css'

const Cardd = ({data}) => {
    const {icon, main, description} = data.weather[0];

    return (
        <Card style={{ width: '18rem', margin: '30px'}}>
            <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Card.Body className='cardbody'>
                <Card.Title>{main}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cardd
