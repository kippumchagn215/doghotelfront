import React from "react";

function Createinput(props) {
  return (
    <div className="signup-input-div">
      <label>{props.prompt}</label>
      <br />
      <input
        type={props.type}
        className="signup-input"
        placeholder={props.prompt}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Createinput;
