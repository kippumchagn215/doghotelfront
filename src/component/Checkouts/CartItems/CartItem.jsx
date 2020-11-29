import React from "react";
import Description from "./Cartdescript";
function CartItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0 cartitem-roomprice">{props.room}</h6>
        <ol className="cartitem-list">
          {props.description.map(function (element, index) {
            return <Description key={index} description={element} />;
          })}
        </ol>
      </div>
      <span className="text-muted">{props.price}$</span>
    </li>
  );
}
export default CartItem;
