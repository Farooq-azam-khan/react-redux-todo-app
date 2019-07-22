import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";

const Todos = props => {
  return (
    <ListGroup>
      {props.todos.map(function(todo) {
        return <Todo todo={todo} />;
      })}
    </ListGroup>
  );
};

// takes state and returns the props
const mapStateToProps = state => ({
  todos: state.todos
});

// connects props to app
export default connect(mapStateToProps)(Todos);
