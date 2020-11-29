import React from "react";

const Name = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="firstName">First name</label>
        <input
          onChange={props.setFname}
          type="text"
          className="form-control"
          id="firstName"
          placeholder="First Name"
          required
        />
        <div className="invalid-feedback">Valid first name is required.</div>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="lastName">Last name</label>
        <input
          onChange={props.setLname}
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Last Name"
          required
        />
        <div className="invalid-feedback">Valid last name is required.</div>
      </div>
    </div>
  );
};
export default Name;
