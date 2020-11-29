import React from "react";
// add active
function NavbarItem(props) {
  return (
    <a
      className="nav-item nav-link list-item"
      href={props.href}
      onClick={props.onClick}
    >
      {props.name}
    </a>
  );
}
export default NavbarItem;
