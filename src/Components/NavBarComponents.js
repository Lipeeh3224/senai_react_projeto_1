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
        <img src="../Logo.png" width={50} height={50} alt="Logo" className="me-2" />
        <Navbar.Brand href="/bemvindo" className="d-flex align-items-center nav-link-custom">
          <span>Bem-Vindo</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto nav-center">
            <Nav.Link href="/filmes" className="nav-link-custom">Filmes</Nav.Link>
            <Nav.Link href="/livros" className="nav-link-custom">Livros</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="outline-light" href="/login" className="me-2 btn-custom">Login</Button>
            <Button variant="outline-light" href="/cadastro" className="btn-custom">Cadastro</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
