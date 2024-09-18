import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function AirportFooter() {
    return(
      <Container>
        <Navbar expand="lg" className="bg-body-secondary">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Sogei</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container>
    );
}