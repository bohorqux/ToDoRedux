import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import { createToDo } from "../actions";
import { getDate } from "../utility";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

class ToDoAdd extends Component {
  onSubmit = (formValues) => {
    const todo = {
      id: uuidv4(),
      title: formValues.title,
      description: formValues.desc,
      author: formValues.author,
      status: "not complete",
      timestamp: getDate(),
    };
    this.props.createToDo(todo);
  };

  render() {
    return (
      <div className="ui piled raised segment">
        <ToDoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createToDo })(ToDoAdd);
