import React from "react";

const Name = (props) => {
  return (
    <div className="col-md-6 mb-3">
      <label htmlFor="cc-name">Name on card</label>
      <input
        onChange={props.setCardname}
        type="text"
        className="form-control"
        id="cc-name"
        placeholder=""
        required
      />
      <small className="text-muted">Full name as displayed on card</small>
      <div className="invalid-feedback">Name on card is required</div>
    </div>
  );
};
export default Name;
