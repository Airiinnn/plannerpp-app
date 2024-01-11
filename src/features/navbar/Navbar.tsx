import React from "react"

import "./navbar.scss";
import CircleButton from "../ui/circleButton/CircleButton";
import Dropdown from "../ui/dropdown/Dropdown";
import NavbarLink from "./navbarLink/NavbarLink";

function Navbar() {
  return (
    <div className="navbar">
      <Dropdown optionValues={["hello", "world"]} />
      <CircleButton clickHandler={() => alert("+")} text="+" />

      <div className="navbar__spacer" />

      <NavbarLink text="Kanban" redirectPath="/kanban" />
      <NavbarLink text="Calendar" redirectPath="/calendar" />
    </div>
  );
}

export default Navbar;
