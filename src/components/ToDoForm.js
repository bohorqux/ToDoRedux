import React, { Component } from "react";
import { Field, reduxForm, reset } from "redux-form";

class ToDoForm extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return <div className="ui left pointing red basic label">{error}</div>;
    }
  }

  onSubmit = (formValues, dispatch) => {
    this.props.onSubmit(formValues);
    dispatch(reset("toDoForm"));
  };

  renderInput = ({ label, input, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    const _placeholder = `Add ${label}...`;
    const _label = `${label}:`;
    return (
      <div className={className}>
        <div className="large ui labeled input">
          <div className="ui label">{_label}</div>
          <input placeholder={_placeholder} {...input} />
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Item" />

        <Field name="author" component={this.renderInput} label="Author" />

        <Field name="desc" component={this.renderInput} label="Desc" />
        <button className="massive ui icon primary button" type="submit">
          Create!
        </button>
      </form>
    );
  }
}

const validate = ({ title, author, desc }) => {
  const errors = {};
  if (!title) {
    errors.title = "Title is required.";
  }
  if (!author) {
    errors.author = "Author is required.";
  }
  if (!desc) {
    errors.desc = "Description is required.";
  }

  return errors;
};

export default reduxForm({
  form: "toDoForm",
  validate,
})(ToDoForm);
