import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoPP from "../images/logoPP.png";
import User from "../images/usuario_default.png"
import "../Styles/Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="#F6F6F6" expand="md">
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
              <Nav.Item className="padding_butons"><Nav.Link eventKey="disabled" disabled href="/diario" className="textnavbar">Metas</Nav.Link></Nav.Item>
              <Nav.Item className="padding_butons" ><Nav.Link eventKey="disabled" disabled href="/diario" className="textnavbar">Foro</Nav.Link></Nav.Item>
              <Nav.Item className="padding_butons"><Nav.Link eventKey="1" href="/diario" className="textnavbar">Diario</Nav.Link></Nav.Item>
            </Nav>
          <Navbar.Brand className="padding_butons">
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
