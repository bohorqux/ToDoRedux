import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteToDo, editToDo } from "../actions";

class ToDoDetail extends Component {
  render() {
    const { todo } = this.props;

    if (!todo) {
      return <h1>Select ToDo!</h1>;
    }

    return (
      <div className="large ui card">
        <div className="content">
          <div className="ui ribbon label">{todo.status}</div>
          <p></p>
          <h4 className="header center aligned">{todo.title}</h4>
        </div>
        <div className="content">
          <h4 className="ui sub header">By: {todo.author}</h4>
          <div className="description">
            <br />
            <br />
            <p>{todo.description}</p>
            <br />
            <br />
          </div>
        </div>
        <div className="extra content">
          <br />
          <button
            className="ui red button"
            onClick={() => this.props.deleteToDo(todo)}
          >
            Delete
          </button>
          <button
            className="ui yellow button"
            onClick={() => this.props.editToDo(true)}
          >
            Edit
          </button>
          <br />
          <br />
          <div className="meta">{todo.timestamp}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todo: state.selected };
};
export default connect(mapStateToProps, { deleteToDo, editToDo })(ToDoDetail);
