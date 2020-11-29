import React from "react";
import Name from "./Name";
import Address1 from "./Address1";
import Address2 from "./Address2";
const Billingaddress = (props) => {
  return (
    <div>
      <Name setFname={props.setFname} setLname={props.setLname} />
      <Address1 setAddress1={props.setAddress1} />
      <Address2 setAddress2={props.setAddress2} />
    </div>
  );
};
export default Billingaddress;
