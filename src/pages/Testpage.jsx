import React from "react";
import axios from "axios";
function d() {
  axios.get("/test").then(function (res) {
    console.log(res);
  });
  return <p>result</p>;
}

export default d;
