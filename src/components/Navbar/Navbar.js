import {useState, useEffect} from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import {setUserSelection} from '../../redux/actions/userSelectionActions'

import {majorCities} from '../../data/citiesData'
import {timeframes} from '../../data/timeframeData'
import {capitalizeFirstLetter} from '../../helpers/capitalize'

const NavbarComponent = () => {
    const dispatch = useDispatch();

    const [city, setCity] = useState(null)
    const [timeframe, setTimeframe] = useState(null)

    useEffect(()=>{
        if(city !== null && timeframe !== null){
            const dataToBeSent = {
                city,
                timeframe
            }
            dispatch(setUserSelection(dataToBeSent))
        }
    },[city,timeframe,dispatch])

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Metta Space</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Cities" id="basic-nav-dropdown">
                        {majorCities.map(el=>(
                            <NavDropdown.Item key={el} onClick={()=>setCity(el)}>{capitalizeFirstLetter(el)}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <NavDropdown title="Timeframe" id="basic-nav-dropdown">
                        {timeframes.map((el, index)=>(
                            <NavDropdown.Item key={index} onClick={()=>setTimeframe(capitalizeFirstLetter(el))}>{capitalizeFirstLetter(el)}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
