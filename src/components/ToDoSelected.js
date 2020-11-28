import React, { Component } from "react";
import { connect } from "react-redux";
import ToDoDetail from "./ToDoDetail";
import ToDoEdit from "./ToDoEdit";
import { updateToDo, editToDo } from "../actions";

class ToDoSelected extends Component {
  onSubmit = () => {
    this.props.editToDo(false);
  };

  render() {
    if (!this.props.edited) {
      return <ToDoDetail />;
    }
    return <ToDoEdit onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = (state) => {
  return { edited: state.edited };
};

export default connect(mapStateToProps, { updateToDo, editToDo })(ToDoSelected);
