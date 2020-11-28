import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="ui divided items">
      <div className="item">
        <h1
          className="header"
          style={{ cursor: "pointer" }}
          onClick={props.handleClick}
        >
          {props.title}
        </h1>
      </div>
      <div className="ui divider"></div>
    </div>
  );
};

export default ToDoItem;
