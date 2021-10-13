import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoPP from "../images/logoPP.png";
import User from "../images/usuario_default.png"

export default class Navigation extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="light" expand="md">
        <Container>
          <Navbar.Brand href="">
            <img
              src= {LogoPP}
              width="75"
              height="75"
              alt=""
            />
         </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav variant="pills" activeKey="1">
              <Nav.Item><Nav.Link eventKey="disabled" disabled href="/diario">Metas</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="disabled" disabled href="/diario">Foro</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="1" href="/diario">Diario</Nav.Link></Nav.Item>
            </Nav>
          <Navbar.Brand>
            <img
              src= {User}
              width="50"
              height="50"
              alt=""
            />
          </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
