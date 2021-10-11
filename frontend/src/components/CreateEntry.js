import axios from "axios";
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class CreateEntry extends Component {
  state = {
    entries: [],
    content: "",
    title: "",
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/diario");
    this.setState({ entries: res.data });
  }

  onChangeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = async (e) => {
    const res = await axios.post("http://localhost:4000/api/diario", {
      content: this.state.content,
    });
    console.log(res);
    e.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Pon un título a tu día</Form.Label>
          <Form.Control type="text" onChange={this.onChangeTitle} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>¿Cuentanos tu día?</Form.Label>
          <Form.Control type="text" onChange={this.onChangeContent} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar entrada
        </Button>
      </Form>
    );
  }
}
