import React, { useState, useEffect } from "react";
import { useAuth } from "../../Auth";
import NavbarItem from "./NavbarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// TODO redirect when brand is clicked and also redirect when buttons are btn on menu are clicked
// Also some styling and margin of navbar
function Navbar() {
  const use = useAuth();
  const Auth = localStorage.getItem("current") === "true";

  function Logout() {
    use.authsignout();
  }
  return (
    <section id="navbars">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={"dog"} /> DogHotel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarList"
          aria-controls="navbarList"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarList">
          <div className="navbar-nav  ml-auto">
            <NavbarItem name={"Home"} href={"/"} />
            <NavbarItem name={"Pricing"} href={"/pricing"} />
            <NavbarItem
              name={"Your Bookings"}
              href={Auth ? "/yourbooking" : "/signin"}
            />
            {Auth ? (
              <NavbarItem name={"Sign out"} href="/" onClick={Logout} />
            ) : (
              <NavbarItem name={"Sign in"} href={"/signin"} />
            )}
            <NavbarItem name={"Create Account"} href={"/createaccount"} />
            <NavbarItem name={"Help"} href={"/help"} />
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
