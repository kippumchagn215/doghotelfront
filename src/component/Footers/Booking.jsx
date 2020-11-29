import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Booking() {
  return (
    <div className="footer-book">
      <h2>Don't know where to leave your dog?? This is the place!</h2>
      <h5>Give it a try ! 50 percent discount for our new customers</h5>
      <a href="/pricing">
        <button
          type="button"
          className="download-btn btn-book btn btn-dark btn-lg"
        >
          Book Now ! <FontAwesomeIcon icon={"calendar-alt"} />{" "}
        </button>
      </a>
    </div>
  );
}
export default Booking;
