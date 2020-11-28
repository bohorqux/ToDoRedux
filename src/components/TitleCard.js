import React from "react";

const TitleCard = () => {
  return (
    <div className="ui placeholder segment">
      <div className="ui two column stackable center aligned grid">
        <div className="ui vertical divider"></div>
        <div className="middle aligned row">
          <div className="column">
            <div className="ui icon header large">
              <i className="sticky note icon"></i>
              To Do List
            </div>
            <div className="field"></div>
          </div>
          <div className="column">
            <div className="ui icon header">
              <i className="react icon"></i>
              <h2>Powered By:</h2>
              <h3>React & Redux</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
