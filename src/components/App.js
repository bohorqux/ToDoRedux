import React from "react";
import TitleCard from "./TitleCard";
import ToDoAdd from "./ToDoAdd";
import ToDoList from "./ToDoList";
import ToDoSelected from "./ToDoSelected";

const App = (props) => {
  return (
    <div className="ui container">
      <TitleCard />
      <ToDoAdd />
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <ToDoList />
          </div>
          <div className="column eight wide">
            <ToDoSelected />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
