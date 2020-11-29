import React from "react";
import Detail from "./Detail";
function Topicdetail(props) {
  return (
    <ul className="fquestions-div list-group col-lg-8">
      {props.items.map((item, index) => (
        <Detail title={item.title} content={item.content} key={index} />
      ))}
    </ul>
  );
}
export default Topicdetail;
