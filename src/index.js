import React from "react";
import ReactDOM from "react-dom";
import Todos from "./components/Todos";
import "./styles.css";
import { Container, Row, Col } from "reactstrap";

import AddTodo from "./components/AddTodo";
import { store } from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container className="App">
          <Row>
            <Col>
              <h1>TODO App</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <AddTodo dispatch={store.dispatch} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Todos />
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
