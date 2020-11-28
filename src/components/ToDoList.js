import React, { Component } from "react";
import { connect } from "react-redux";
import { selectToDo } from "../actions";

import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  render() {
    return this.props.todos.map((todo) => {
      return (
        <ToDoItem
          key={todo.id}
          title={todo.title}
          handleClick={() => this.props.selectToDo(todo)}
        />
      );
    });
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { selectToDo })(ToDoList);
