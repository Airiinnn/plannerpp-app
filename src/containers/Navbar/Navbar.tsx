import React from "react"

import "./navbar.scss";
import NavbarLink from "../../components/NavbarLink/NavbarLink";

function Navbar() {
  return (
    <div className="navbar">
      <select>
        <option>Y1S1</option>
      </select>

      <NavbarLink text="Kanban" redirectPath="/kanban" />
      <NavbarLink text="Calendar" redirectPath="/calendar" />
    </div>
  );
}

export default Navbar;
