import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Createinput from "./Createinput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function Createaccount() {
  // TODO when the user click back button from confirmation page, just lead them back to main page.
  const [EmailAddress, setEmailAddress] = useState("");
  const [Password, setPasword] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Exist, setExist] = useState([]);
  const [Clicked, setClicked] = useState(false);
  const [Data, setData] = useState([]);
  const history = useHistory();

  useEffect(function () {
    axios.get("/signup").then((res) => {
      // how can u parse it when the obj was sent in json form, component mount blah blahs, await, sync ?
      setData(res.data);
    });
  }, []);

  const new_user = {
    username: EmailAddress,
    password: Password, // to authenticate label for username and password should exactly math username and password otherwise 404 error but y???
    fname: Firstname,
    lname: Lastname,
  };

  function sendUser(event) {
    event.preventDefault();

    const dup = Data.filter(function (element) {
      return element.username === EmailAddress;
    });
    if (dup.length == 0) {
      axios.post("/signup", new_user).then((res) => console.log(res.data));
      history.push("/createsuccess");
    } else {
      alert(
        "The email you have entered is already being used, please enter different email"
      );
    }
  }

  return (
    <section id="signups">
      <img
        className="signup-background w-100"
        src="/images/8corgi.jpg"
        alt="8corgi pic"
      />
      <div className="signup-div sm-12">
        <div className="signup-form">
          <div className="signup-btn-div">
            <a href="http://localhost:4000/auth/google">
              <button className="signup-btn btn-block btn btn-lg btn-light btn-outline-primary">
                <FontAwesomeIcon icon={["fab", "google"]} /> Sign up with Google
              </button>
            </a>
          </div>
          <hr />
          <div className="signup-inputs">
            <Createinput
              type={"text"}
              prompt={"Email Address"}
              onChange={(event) => setEmailAddress(event.target.value)}
            />
            <Createinput
              type={"password"}
              prompt={"Password"}
              onChange={(event) => setPasword(event.target.value)}
            />
            <Createinput
              type={"text"}
              prompt={"First Name"}
              onChange={(event) => setFirstname(event.target.value)}
            />
            <Createinput
              type={"text"}
              prompt={"Last Name"}
              onChange={(event) => setLastname(event.target.value)}
            />
          </div>
          <button
            onClick={sendUser}
            className="signup-btn btn-block btn-lg btn-primary"
          >
            Create account
          </button>
        </div>
      </div>
    </section>
  );
}

export default Createaccount;
