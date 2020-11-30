import React from "react";
import axios from "axios";
function d() {
  axios
    .get("http://localhost:4000/test", { withCredentials: true })
    .then(function (res) {
      console.log(res);
    });
  return <p>working</p>;
}

export default d;
