import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Heading() {
  return (
    <section id="headings">
      <div className="row">
        <div className="col-lg-6 heading-div">
          <h1>The Best Friendly and Comfortable Hotel for Your Dogs</h1>
          <div>
            <a href="/pricing">
              <button
                type="button"
                className="download-btn btn btn-dark btn-lg heading-btn"
              >
                Book Now ! <FontAwesomeIcon icon={"calendar-alt"} />{" "}
              </button>
            </a>
          </div>
        </div>
        <div className="col-lg-6 angel-div">
          <img
            className="Angel-img"
            src="images/Angel.jpg"
            alt="cute_angel"
          ></img>
        </div>
      </div>
    </section>
  );
}
export default Heading;
