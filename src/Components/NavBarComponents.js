import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../Exercise/NavBar.css'; 

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/bemvindo">
          <img src="../Logo.png" width={150} height={90} alt="Logo" />
          Bem-Vindo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/filmes">Filmes</Nav.Link>
            <Nav.Link href="/livros">Livros</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="dark" href="/login">Login</Button>
            <Button variant="dark" href="/cadastro">Cadastro</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;