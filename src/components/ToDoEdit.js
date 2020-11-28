import React, { Component } from "react";
import { connect } from "react-redux";
import { updateToDo } from "../actions";
import { Field, reduxForm } from "redux-form";

class ToDoEdit extends Component {
  onSubmit = () => {
    this.props.onSubmit();
  };

  /* There must be an easier way to:
    1.) Consolidate the following 3 onChange handlers into 1 reusable onChange handler.
    2.) Consolidate the following 3 renderInputs into one render component.
    3.) Be able to pass in a certain onChange handler to the Field component
  */
  handleChangeTitle = (event) => {
    const { todo } = this.props;
    const updatedTodo = {
      id: todo.id,
      title: event.target.value,
      description: todo.description,
      author: todo.author,
      status: todo.status,
      timestamp: todo.timestamp,
    };
    this.props.updateToDo(updatedTodo);
  };

  handleChangeAuthor = (event) => {
    const { todo } = this.props;
    const updatedTodo = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      author: event.target.value,
      status: todo.status,
      timestamp: todo.timestamp,
    };
    this.props.updateToDo(updatedTodo);
  };

  handleChangeDescription = (event) => {
    const { todo } = this.props;
    const updatedTodo = {
      id: todo.id,
      title: todo.title,
      description: event.target.value,
      author: todo.author,
      status: todo.status,
      timestamp: todo.timestamp,
    };
    this.props.updateToDo(updatedTodo);
  };

  renderInputTitle = ({ data, input }) => {
    return (
      <div className="ui transparent input">
        <input
          {...input}
          type="text"
          value={data}
          onChange={this.handleChangeTitle}
        />
      </div>
    );
  };

  renderInputAuthor = ({ data, input }) => {
    return (
      <div className="ui transparent input">
        <input
          {...input}
          type="text"
          value={data}
          onChange={this.handleChangeAuthor}
        />
      </div>
    );
  };

  renderInputDescription = ({ data, input }) => {
    return (
      <div className="ui transparent input">
        <input
          {...input}
          type="text"
          value={data}
          onChange={this.handleChangeDescription}
        />
      </div>
    );
  };

  render() {
    const { todo } = this.props;

    return (
      <form
        className="large ui card"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="content">
          <div className="ui ribbon label">{todo.status}</div>
          <p></p>
          <h4 className="header center aligned">
            <Field
              name="editTitle"
              component={this.renderInputTitle}
              data={todo.title}
            />
          </h4>
        </div>
        <div className="content">
          <h4 className="ui sub header">
            By:
            <Field
              name="editAuthor"
              component={this.renderInputAuthor}
              data={todo.author}
            />
          </h4>
          <div className="description">
            <br />
            <br />
            <Field
              name="editDesc"
              component={this.renderInputDescription}
              data={todo.description}
            />
            <br />
            <br />
          </div>
        </div>
        <div className="extra content">
          <br />
          <button className="ui yellow button" type="submit">
            Confirm
          </button>
          <br />
          <br />
          <div className="meta">{todo.timestamp}</div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { todo: state.selected };
};

ToDoEdit = connect(mapStateToProps, { updateToDo })(ToDoEdit);

export default reduxForm({
  form: "toDoFormEdited",
})(ToDoEdit);
