import React from "react";

import "./tagbar.scss";
import { TagbarProps } from "../../types";
import CircleButton from "../CircleButton/CircleButton";

function Tagbar({ tags }: TagbarProps) {
  return (
    <div className="tagbar">
      {tags.map((tag: string) => (
        <div className="tagbar__tag">
          <h2 className="tagbar__tag__text" key={tag}>{tag}</h2>
        </div>
      ))}

      <CircleButton clickHandler={() => alert("+")} text="+" invertColors={true} />
    </div>
  );
}

export default Tagbar;
