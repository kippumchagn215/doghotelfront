import React, { useState } from "react";
import Topic from "./Topics";
import Topicdetail from "./Topicdetail";
import { freqentitems, rewarditems, contactitems } from "./Items";
function Help() {
  const [Detail, setDetail] = useState("");
  function onClick(event) {
    setDetail(event);
  }
  function renderSwitch(param) {
    switch (param) {
      case "Rewards":
        return <Topicdetail items={rewarditems} />;
      case "Contacts":
        return <Topicdetail items={contactitems} />;
      default:
        return <Topicdetail items={freqentitems} />;
    }
  }
  return (
    <div className="row helps-div">
      <Topic onClick={onClick} current={Detail} />
      {renderSwitch(Detail)}
    </div>
  );
}
export default Help;
