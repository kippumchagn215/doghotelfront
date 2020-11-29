import React from "react";
import CartItem from "./CartItem";
const yourCart = (props) => {
  return (
    <div className="col-lg-4 col-md-4 order-md-2 mb-4">
      <h4 className="checkout-heading d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">
          {props.days} days
        </span>
      </h4>
      <ul className="list-group mb-3">
        <CartItem
          room={props.room}
          description={props.description}
          price={props.price}
        />
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>{props.price * props.days} $</strong>
        </li>
      </ul>
    </div>
  );
};

export default yourCart;
