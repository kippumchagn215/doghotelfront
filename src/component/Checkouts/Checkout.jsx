import React, { useState, useEffect } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Components
import CheckoutHeader from "./checkoutheader";
import Yourcarts from "./CartItems/Yourcarts";
import Billingaddress from "./Userinfos/Billingaddress";
import Paymentmethods from "./Paymentmethod/Paymentmethods";
import PaymentInfo from "./Paymentinfos/Paymentinfo";
//TODO input validation
import Calendar from "./Calendar";
function Checkout() {
  // if here the user is authenticated yo
  const history = useHistory();
  // also pass in reserved date
  // connect with db and store all info
  // and show corresponding weather
  // console.log(history);
  let price = history.location.state.price;
  let room = history.location.state.room;
  let description = history.location.state.description;

  // if (history.action === "PUSH") {
  //   // if the user came in by clicking btn, render this page
  //   price = history.location.state.price;
  // } else {
  //   // if the user came in by directly typing url, direct to error page.
  //   history.push("/errorpage");
  // }
  const [Startdate, setStartdate] = useState(0);
  const [Enddate, setEnddate] = useState(0);
  const [Diff, setDiff] = useState(0);
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Payment, setPayment] = useState("Credit card");
  const [Cardname, setCardname] = useState("");
  const [Creditnum, setCreditnum] = useState(0);
  const [Exp, setExp] = useState("");
  const [Cvv, setCvv] = useState("");

  function onDateChange(start, end) {
    const startdate = moment(start);
    const enddate = moment(end);
    setStartdate(start);
    setEnddate(end);

    const value = enddate.diff(startdate, "days") + 1;
    setDiff(value <= 0 ? 0 : value);
  }

  function onCheckOut(event) {
    event.preventDefault();
    const userinfo = {
      Startdate,
      Enddate,
      numofdays: Diff,
      totalprice: price * Diff,
      room,
      description,
      Fname: Fname === "" ? "" : Fname.target.value,
      Lname: Lname === "" ? "" : Lname.target.value,
      Address1: Address1 === "" ? "" : Address1.target.value,
      Address2: Address2 === "" ? "" : Address2.target.value,
      Payment: Payment === "Credit card" ? "Credit card" : Payment.target.id,
      Cardname: Cardname === "" ? "" : Cardname.target.value,
      Creditnum: Creditnum === 0 ? "" : Creditnum.target.value,
      Exp: Exp === "" ? "" : Exp.target.value,
      Cvv: Cvv === "" ? "" : Cvv.target.value,
      Date:
        new Date().getMonth() +
        1 +
        "/" +
        new Date().getDate() +
        "/" +
        new Date().getFullYear(),
    };
    axios.post("/checkout", userinfo).then((res) => {
      const response = res.data;
      if (response.data === "error occured while saving") {
        console.log("error occured while saving");
        history.push("/checkout");
      } else {
        console.log("successfuly inserted");
        const path = "/confirmation";
        history.push(path, { userinfo });
      }
    });
  }

  return (
    <div className="checkout-div">
      <div className="container">
        <CheckoutHeader />
        <div className="row">
          <div className="calendar col-lg-8 ">
            <Calendar onDateChange={onDateChange} />
          </div>
          <Yourcarts
            room={room}
            price={price}
            description={description}
            days={Diff}
          />
        </div>
        <div className="payment-div row">
          <div className="col-md-12 col-lg-12 order-md-1">
            <h4 className="mb-3 checkout-heading">Billing address</h4>
            <form className="needs-validation" noValidate>
              <Billingaddress
                setFname={setFname}
                setLname={setLname}
                setAddress1={setAddress1}
                setAddress2={setAddress2}
              />

              <hr className="mb-4" />

              <h4 className="mb-3 checkout-heading">Payment</h4>

              <Paymentmethods setPayment={setPayment} />

              <PaymentInfo
                setCardname={setCardname}
                setCreditnum={setCreditnum}
                setExp={setExp}
                setCvv={setCvv}
              />

              <hr className="mb-4" />
              <button
                onClick={onCheckOut}
                className="checkout-btn btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Check Out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
