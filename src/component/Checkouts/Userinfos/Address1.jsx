import React from "react";

const Address1 = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor="address">Address</label>
      <input
        onChange={props.setAddress1}
        type="text"
        className="form-control"
        id="address"
        placeholder="1234 Main St"
        required
      />
      <div className="invalid-feedback">
        Please enter your shipping address.
      </div>
    </div>
  );
};
export default Address1;
