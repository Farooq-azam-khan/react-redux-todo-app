import React from "react";
import { Button, ListGroupItem, Row, Col } from "reactstrap";
import { updateTodoCompleteAction, deleteTodoAction } from "../store/actions";
import { connect } from "react-redux";

class Todo extends React.Component {
  state = {};

  handleComplete = () => {
    this.props.dispatch(updateTodoCompleteAction(this.props.todo));
  };
  handleDelete = () => {
    this.props.dispatch(deleteTodoAction(this.props.todo));
  };
  render() {
    return (
      <ListGroupItem key={this.props.todo.id.toString()} className={"mt-4"}>
        <Row>
          <Col>
            <Button
              color="success"
              onClick={this.handleComplete}
              active={this.props.todo.completed}
            >
              Done
            </Button>
          </Col>
          <Col>
            <h6>{this.props.todo.text}</h6>
          </Col>
          <Col>
            <Button color="danger" onClick={this.handleDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}
export default connect()(Todo);
