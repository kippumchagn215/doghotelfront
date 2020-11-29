import React from "react";
import { useHistory } from "react-router-dom";

function Confirmationpage() {
  const history = useHistory();
  const userinfo = history.location.state.userinfo;
  const start = JSON.stringify(userinfo.Startdate).slice(0, 11);
  const end = JSON.stringify(userinfo.Enddate).slice(0, 11);
  return (
    <div className="confirm-div">
      <h2 className="confirm-header">Confirmed</h2>
      <h5 className="confirm-detail">
        <span className="confirm-span">Starting Date: </span> {start}
      </h5>
      <h5 className="confirm-detail">
        <span className="confirm-span">End Date: </span>
        {end}
      </h5>
      <h5 className="confirm-detail">
        <span className="confirm-span">Room Reserved:</span> {userinfo.room}
      </h5>
      <h5 className="confirm-detail">
        <span className="confirm-span">Payment Method: </span>
        {userinfo.Payment}
      </h5>
      <h5 className="confirm-detail">
        <span className="confirm-span"> Total Price Payed: </span>{" "}
        {userinfo.totalprice} $
      </h5>
      <a href="/" className="btn btn-primary">
        Back to home page
      </a>
    </div>
  );
}

export default Confirmationpage;
