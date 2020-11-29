import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YourBookingDetails from "./YourBookingDetails";

function YourBookingItem(props) {
  const [Clicked, setClicked] = useState(false);

  return (
    <li className="list-group-item list-group-item-info booking-items col-lg-8 col-md-10">
      {
        <div>
          <p>
            <button
              className="yourbooking-btn"
              onClick={() => setClicked(!Clicked)}
            >
              <FontAwesomeIcon icon="chevron-down" />
            </button>
            <b className="yourbooking-bold">Room: </b> {props.userinfo.room}{" "}
            <b className="yourbooking-bold">Reserved Date:</b>{" "}
            {props.userinfo.Date}{" "}
            <b className="yourbooking-bold">Reserved Name: </b>{" "}
            {props.userinfo.Fname + ", " + props.userinfo.Lname}{" "}
          </p>
          {Clicked ? <YourBookingDetails userinfo={props.userinfo} /> : null}
          {/* Error Occured if occurs again try to fix it */}
        </div>
      }
    </li>
  );
}
export default YourBookingItem;
