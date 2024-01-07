import React from "react";

import "./tagbar.scss";
import { TagbarProps } from "../../../types";
import CircleButton from "../../ui/circleButton/CircleButton";

function Tagbar({ tags }: TagbarProps) {
  return (
    <div className="tagbar">
      <div className="tagbar__tag--selected">
        <h2 className="tagbar__tag__text">CS1234</h2>
      </div>
      {tags.map((tag: string) => (
        <div className="tagbar__tag" key={tag}>
          <h2 className="tagbar__tag__text">{tag}</h2>
        </div>
      ))}

      <CircleButton clickHandler={() => alert("+")} text="+" invertColors={true}/>
    </div>
  );
}

export default Tagbar;
