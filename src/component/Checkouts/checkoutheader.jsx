import React from "react";

const CheckoutHeader = () => {
  return (
    <div className="py-5 text-center">
      <img
        className="mb-4 signin-img"
        src="/images/angelsofa.jpg"
        alt="angel on sofa"
      ></img>
      <h2 className="checkout-heading">Checkout form</h2>
      <p className="lead">
        We ensure the privacy of our customers personal information! Our walk
        service will be substituted to indoor walk service if the weather is
        bad, Please check the weather before booking, Thank you!
      </p>
    </div>
  );
};
export default CheckoutHeader;
