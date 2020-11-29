import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TopicItem(props) {
  const active = props.topic === props.current ? "active" : null;
  return (
    <button className="list-btn " onClick={() => props.onClick(props.topic)}>
      <li className={"list-group-item " + active}>
        <FontAwesomeIcon icon={props.icon} /> {props.topic}
      </li>
    </button>
  );
}
export default TopicItem;
