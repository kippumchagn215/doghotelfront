import React from "react";

const Paymentitem = (props) => {
  return (
    <div className="custom-control custom-radio">
      <input
        onChange={props.setPayment}
        id={props.method}
        name="paymentMethod"
        type="radio"
        className="custom-control-input"
        defaultChecked={props.default}
        required
      />
      <label className="custom-control-label" htmlFor={props.method}>
        {props.method}
      </label>
    </div>
  );
};

export default Paymentitem;
