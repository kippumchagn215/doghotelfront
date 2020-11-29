import React from "react";

const Expiration = (props) => {
  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <label htmlFor="cc-expiration">Expiration</label>
        <input
          onChange={props.setExp}
          type="text"
          className="form-control"
          id="cc-expiration"
          placeholder="ex - 11/20/21"
          required
        />
      </div>
      <div className="col-md-3 mb-3">
        <label htmlFor="cc-expiration">CVV</label>
        <input
          onChange={props.setCvv}
          type="number"
          className="form-control"
          id="cc-cvv"
          placeholder=""
          onKeyDown={(evt) =>
            (evt.key === "e" || evt.key === "+" || evt.key === "-") &&
            evt.preventDefault()
          }
          required
        />
      </div>
    </div>
  );
};
export default Expiration;
