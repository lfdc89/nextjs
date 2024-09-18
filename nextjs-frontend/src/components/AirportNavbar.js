
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AirportNavbar() {
    return (
      <Container>
        <Navbar expand="lg" className="bg-body-secondary">
            <Navbar.Brand href="/">Airport Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/departures">Partenze</Nav.Link>
                <Nav.Link href="/arrivals">Arrivi</Nav.Link>
                <Nav.Link href="/shops">Negozi</Nav.Link>
                <Nav.Link href="/forecast">Meteo</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container>
    );
}