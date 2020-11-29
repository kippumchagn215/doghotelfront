import React from "react";
import Paymentitem from "./Paymentitem";
const Paymentmethods = (props) => {
  return (
    <div className="d-block my-3">
      <Paymentitem
        method="Credit card"
        default={true}
        setPayment={props.setPayment}
      />
      <Paymentitem method="Debit card" setPayment={props.setPayment} />
      <Paymentitem method="Paypal" setPayment={props.setPayment} />
    </div>
  );
};
export default Paymentmethods;
