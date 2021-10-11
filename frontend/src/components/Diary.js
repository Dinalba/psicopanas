import React, { Component } from "react";
import axios from "axios";
import { Container, ListGroup, Row, Button } from "react-bootstrap";

export default class Diary extends Component {
  state = {
    entries: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/diario");
    this.setState({ entries: res.data });
  }

  render() {
    return (
      <Container fluid>
        {this.state.entries.map((user) => (
          <Row>
            <ListGroup>
              <ListGroup.Item>{user.test}</ListGroup.Item>
            </ListGroup>
          </Row>
        ))}
        <div>
          <Button href="/diario/nuevaEntrada" variant="primary" size="sm" >
            Nueva Entrada
          </Button>
        </div>
      </Container>
    );
  }
}
