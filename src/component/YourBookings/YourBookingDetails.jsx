import React from "react";

function YourBookingDetails(props) {
  return (
    <div className="booking-details">
      <p>
        <b>StartDate: </b>
        {props.userinfo.Startdate.slice(0, 10)}
      </p>
      <p>
        <b>EndDate: </b> {props.userinfo.Enddate.slice(0, 10)}
      </p>
      <p>
        <b>TotalDays: </b> {props.userinfo.numofdays}
      </p>
      <p>
        <b>TotalCost: </b>
        {props.userinfo.totalprice}
      </p>
      <b>Services: </b>
      <ul>
        {props.userinfo.description.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
export default YourBookingDetails;
