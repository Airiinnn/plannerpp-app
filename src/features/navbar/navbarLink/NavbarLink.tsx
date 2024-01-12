import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./navbar-link.scss";
import { NavbarLinkProps } from "../../../types";

function NavbarLink({ title, redirectPath }: NavbarLinkProps) {
  const location = useLocation();

  const isSelected = (navbarLinkTitle: string, pathname: string): boolean => {
    return "/" + navbarLinkTitle.toLowerCase() === pathname.toLowerCase();
  }

  return (
    <Link to={redirectPath}>
      <h2 className={`navbar-link__text ${isSelected(title, location.pathname) && "navbar-link__text--selected"}`}>{title}</h2>
    </Link>
  );
}

export default NavbarLink;
