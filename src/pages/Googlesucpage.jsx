import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function GoogleSuccess() {
  const history = useHistory();
  // can you run this without await?? hm not sure but dont think so
  async function test() {
    const response = await axios.get("/test");
    console.log(response.data);
    if (response.data === true) {
      localStorage.setItem("current", true);
      history.push("/");
    } else {
      history.push("/signin");
    }
  }
  test(); // why it should be a nested function Line 6:13:  Effect callbacks are synchronous to prevent race conditions. Put the async function inside:??
  return "something";
}
export default GoogleSuccess;
