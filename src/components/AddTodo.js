import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { addTodoAction } from "../store/actions";
import { connect } from "react-redux";
class AddTodo extends React.Component {
  state = {
    inputText: ""
  };

  handleInput = event => {
    this.setState({ inputText: event.target.value });
  };
  clearInput = () => {
    this.setState({ inputText: "" });
  };
  addTodo = () => {
    if (this.state.inputText) {
      this.props.dispatch(addTodoAction(this.state.inputText));
      this.clearInput();
    }
  };
  handleKeyPress = key => {
    if (key.charCode === 13) {
      this.addTodo();
    }
  };
  render() {
    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button color="primary" onClick={this.addTodo}>
            Add Todo
          </Button>
        </InputGroupAddon>
        <Input
          onChange={this.handleInput}
          type="text"
          value={this.state.inputText}
          onKeyPress={this.handleKeyPress}
          placeholder="enter todo"
        />
      </InputGroup>
    );
  }
}

export default connect()(AddTodo);
