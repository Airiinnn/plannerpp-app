import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__app-name">Planner++</h1>

      <div className="header__navigation">
        <Link to="/kanban">
          <h2>Kanban</h2>
        </Link>
        <Link to="/calendar">
          <h2>Calendar</h2>
        </Link>
      </div>
      
      <p>Login</p>
    </header>
  );
}

export default Header;
// Todo: Login to be implemented (Likely not soon)
