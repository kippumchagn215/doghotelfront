import React from "react";

const Address2 = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor="address2">
        Address 2 <span className="text-muted">(Optional)</span>
      </label>
      <input
        onChange={props.setAddress2}
        type="text"
        className="form-control"
        id="address2"
        placeholder="Apartment or suite"
      />
    </div>
  );
};
export default Address2;
