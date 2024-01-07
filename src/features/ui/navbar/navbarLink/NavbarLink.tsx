import React from "react";
import { Link } from "react-router-dom";

import "./navbar-link.scss";
import { NavbarLinkProps } from "../../../../types";

function NavbarLink({ text, redirectPath }: NavbarLinkProps) {
  return (
    <Link to={redirectPath}>
      <h2 className="navbar-link__text">{text}</h2>
    </Link>
  );
}

export default NavbarLink;
