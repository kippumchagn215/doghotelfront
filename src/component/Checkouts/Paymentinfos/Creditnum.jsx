import React from "react";

const Creditnum = (props) => {
  return (
    <div className="col-md-6 mb-3">
      <label htmlFor="cc-number">Credit card number</label>
      <input
        onChange={props.setCreditnum}
        type="number"
        className="form-control"
        id="cc-number"
        placeholder=""
        onKeyDown={(evt) =>
          (evt.key === "e" || evt.key === "+" || evt.key === "-") &&
          evt.preventDefault()
        }
        required
      />
    </div>
  );
};
export default Creditnum;
