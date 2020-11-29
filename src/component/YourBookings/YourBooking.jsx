import React, { useState, useEffect } from "react";
import YourBookingItem from "./YourBookingItem";
import { useHistory } from "react-router-dom";
import axios from "axios";
//TODO somehow connect with db and retreive info. Also save info to db when user books
//do you need usestae here?
function YourBooking() {
  const [Allbooking, setAllBooking] = useState([]);
  const history = useHistory();
  const Auth = localStorage.getItem("current") === "true";
  useEffect(function () {
    // when anything changes this is what you should use to update?? but y do i need this when usestate also rerenders and update the
    if (Auth !== true) {
      history.push("/signin");
    } else {
      // when does useeffect run?? thought hooks also renders page,so if useffect runs only one time and set hook renders then, it should also result in infinite loop but it doesn't y?
      axios.post("/yourbooking").then(function (res) {
        setAllBooking(res.data.booking);
      });
    }
  }, []);
  return (
    <section id="yourbookings">
      <h3 className="booking-header">Your Reservation</h3>
      <ul className="list-group">
        {Allbooking.length !== 0 ? (
          Allbooking.map((props, index) => (
            <YourBookingItem key={index} userinfo={props} index={index} />
          ))
        ) : (
          <p>Your Reservation does not exist</p>
        )}
      </ul>
    </section>
  );
}
export default YourBooking;
