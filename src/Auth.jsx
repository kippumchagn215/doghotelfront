import React, {
  useRef,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const authContext = createContext();
function ProvideAuth({ children }) {
  const history = useHistory();
  const [auth, setAuth] = useState(Auth());
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuth() {
  console.log("useauth");
  return useContext(authContext);
}

function Auth() {
  const authsignin = function (Username, Password, history) {
    const user = {
      username: Username,
      password: Password,
    };

    axios
      .post("https://damp-thicket-92600.herokuapp.com/login", user, {
        crossDomain: true,
        withCredentials: true,
      })
      .then((res) => {
        if (res.data === false) {
          alert("User does not exist or Incorrect password");
        } // print if user doesn't exist or password is wrong
        else {
          console.log(res);
          localStorage.setItem("id", Username);
          localStorage.setItem("current", true); // seems like localstorage can only store string
          history.push("/"); // if the user is authenticated just take them back to home page
        }
      });
  };

  const authsignout = function () {
    axios
      .get("https://damp-thicket-92600.herokuapp.com/logout", {
        crossDomain: true,
        withCredentials: true,
      })
      .then(function (res) {
        // can you remove then function?
        // only get request shows the information of user
      });
    localStorage.removeItem("id");
    localStorage.setItem("current", false);
    // index.js:1 Warning: Cannot update a component (`ProvideAuth`) while rendering a different component (`Logout`). To locate the bad setState() call inside `Logout`, follow the stack trace as described i
  };
  // console.log(user);
  return { authsignin, authsignout };
}
export default Auth;
export { ProvideAuth, useAuth };
