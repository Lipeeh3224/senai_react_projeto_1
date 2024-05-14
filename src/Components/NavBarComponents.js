import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

function NavbarComponent() {
  return (
    <Navbar bg="info" data-bs-theme="info" expand="lg" className="bg-body-tertiary">
      <Container>
        <img src= "../Logo.png" width={150} height={90}></img>
        <Navbar.Brand href="/bemvindo">Bem-Vindo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/filmes">Filmes</Nav.Link>
            <Nav.Link href="/livros">Livros</Nav.Link>
            <Button variant="dark" href="/login" >Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;