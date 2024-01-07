import React from "react";

import "./input-select.scss";
import { InputSelectProps } from "../../types";

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function InputSelect({ name, defaultValue, optionValues }: InputSelectProps) {
  return (
    <div className="input-select">
      <label className="input-select__label">
        {capitalizeFirstLetter(name)}:
      </label>

      <select
        className="input-select__input"
        name={name}
        defaultValue={defaultValue}
      >
        {optionValues.map((optionValue: string) => (
          <option value={optionValue}>{optionValue}</option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
