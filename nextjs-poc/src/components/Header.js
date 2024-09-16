import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (<div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Albergo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/reservation">Prenota</Nav.Link>
                        <Nav.Link href="/wheater">Meteo struttura</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    </div>);
}