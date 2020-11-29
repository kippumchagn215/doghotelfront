import React from "react";
import TopicItem from "./TopicItem";
function Topic(props) {
  return (
    <div className="topics-div col-lg-4 w-100 ">
      <ul className="list-group">
        <TopicItem
          current={props.current}
          onClick={props.onClick}
          topic={"Frequently Asked Questions"}
          icon={"question-circle"}
        />
        <TopicItem
          current={props.current}
          onClick={props.onClick}
          topic={"Rewards"}
          icon={"medal"}
        />
        <TopicItem
          current={props.current}
          onClick={props.onClick}
          topic={"Contacts"}
          icon={"address-book"}
        />
      </ul>
    </div>
  );
}
export default Topic;
