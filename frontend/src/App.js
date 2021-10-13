import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Navigation from "./components/Navigation";
import Diary from "./components/Diary";
import CreateEntry from "./components/CreateEntry";

function App() {
  return (
    <Router>
      <Navigation/>
      <Container>
        <Route path="/diario" exact component={Diary} />
        <Route path="/diario/nuevaEntrada" exact component={CreateEntry} />
        <Route path="/editarEntrada/:id" exact component={CreateEntry} />
      </Container>
    </Router>
  );
}

export default App;
