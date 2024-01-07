import React from "react";

import "./input-date.scss";
import { InputProps } from "../../../../types";

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function InputDate({ name, defaultValue }: InputProps) {
  return (
    <div className="input-date">
      <label className="input-date__label">
        {capitalizeFirstLetter(name)}:
      </label>

      <input
        className="input-date__input"
        type="date"
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default InputDate;
