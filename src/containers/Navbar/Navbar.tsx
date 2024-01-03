import React from "react"

import "./navbar.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import NavbarLink from "../../components/NavbarLink/NavbarLink";

function Navbar() {
  return (
    <div className="navbar">
      <Dropdown optionValues={["hello", "world"]} />

      <NavbarLink text="Kanban" redirectPath="/kanban" />
      <NavbarLink text="Calendar" redirectPath="/calendar" />
    </div>
  );
}

export default Navbar;
