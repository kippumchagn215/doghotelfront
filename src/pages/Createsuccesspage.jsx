import React from "react";

function Success() {
  return (
    <div>
      <h3 className="Createsuccess-header">
        Successfully Created Your Account{" "}
        <a className="Createsuccess-link" href="/signin">
          Go to Sign in
        </a>
      </h3>
    </div>
  );
}

export default Success;
