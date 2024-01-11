import React from "react";

import "./textarea.scss"
import { InputProps } from "../../../../types";

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function Textarea({ name, defaultValue }: InputProps) {
  return (
    <div className="textarea">
      <label className="textarea__label">
        {capitalizeFirstLetter(name)}:
      </label>

      <textarea
        className="textarea__input"
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default Textarea;
