import React from "react";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__app-name">Planner<span className="header__app-name--pink">++</span></h1>

      <h2 className="header__login"></h2>
    </header>
  );
}

export default Header;
// Todo: Login to be implemented (Likely not soon)
