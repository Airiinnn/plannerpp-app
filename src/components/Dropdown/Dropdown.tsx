import React, { useState } from "react";

import "./dropdown.scss";
import { SelectProps } from "../../types";

function Dropdown({ optionValues }: SelectProps) {
  const [isActive, setIsActive] = useState(false);

  function toggleDropdown() {
    setIsActive(current => !current)
  }

  return (
    <div className="dropdown">
      <button
        className={`dropdown__button ${isActive ? "dropdown__button--main" : "dropdown__button--sub"}`}
        onClick={toggleDropdown}
      >
        Collection
      </button>

      <div className={`dropdown__menu ${isActive ? "dropdown__menu--show" : "dropdown__menu--hide"}`}>
        {optionValues.map((optionValue: string) => (
          <div className="dropdown__menu__item" key={optionValue}>
            {optionValue}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
// Todo: Find suitable tag for name. Decide how to handle default.
