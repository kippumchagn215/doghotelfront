import React from "react";

//TODO how to loop through deals array instead of making 3 deals
const PricingItem = (props) => {
  return (
    <div className="col-lg-4 col-md-6 card-contents">
      <div className="card-header">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <h2>{props.price}$ /day</h2>
        <p>{props.deal1}</p>
        <p>{props.deal2}</p>
        <p>{props.deal3}</p>
        <button
          onClick={() =>
            props.onclick(props.price, props.title, [
              props.deal1,
              props.deal2,
              props.deal3,
            ])
          }
          className="btn btn-lg btn-block btn-outline-dark"
        >
          Book Now!
        </button>
      </div>
    </div>
  );
};

export default PricingItem;
