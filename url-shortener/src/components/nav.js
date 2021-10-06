import {Navbar, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


export default function CustomNav(props){
    const history = useHistory();
    const routeChange = (location) => {        
        history.push(location);
    }
    return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => routeChange('/home')}>Payroc - shortener</Navbar.Brand>
                </Container>
            </Navbar>
    )
}