import React from "react";
import Name from "./Name";
import Creditnum from "./Creditnum";
import Expiration from "./Expiration";
const Paymentinfo = (props) => {
  return (
    <div>
      <div className="row">
        <Name setCardname={props.setCardname} />
        <Creditnum setCreditnum={props.setCreditnum} />
      </div>
      <Expiration setExp={props.setExp} setCvv={props.setCvv} />
    </div>
  );
};
export default Paymentinfo;
