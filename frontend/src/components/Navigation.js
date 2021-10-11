import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="ligth" expand="md">
        <Container>
          <Navbar.Brand>PsicoPanas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/diario">Diario</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
