import React from "react";

import "./tagbar.scss";
import CircleButton from "../ui/circleButton/CircleButton";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleSelected } from "../../slices/tagbarSlice";
import { showModal } from "../../slices/modalSlice";

// Todo: Overflow behavior, button icons
function Tagbar() {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tagbar.tags);

  const showTagAddModalPayload = {
    modalType: "tag-add"
  }

  const showTagDeleteModalPayload = {
    modalType: "tag-delete"
  }

  const showTagUpdateModalPayload = {
    modalType: "tag-update"
  }

  return (
    <div className="tagbar">
      {tags.map((tag) => (
        <h2
          className={`tagbar__tag ${tag.selected && "tagbar__tag--selected"}`}
          key={tag.title}
          onClick={() => dispatch(toggleSelected(tag.title))}
        >
          {tag.title}
        </h2>
      ))}

      <CircleButton clickHandler={() => dispatch(showModal(showTagAddModalPayload))} text="+" invertColors={true} />
      <span className="tagbar__button-separator">/</span>
      <CircleButton clickHandler={() => dispatch(showModal(showTagUpdateModalPayload))} text="r" invertColors={true} />
      <span className="tagbar__button-separator">/</span>
      <CircleButton clickHandler={() => dispatch(showModal(showTagDeleteModalPayload))} text="-" invertColors={true} />
    </div>
  );
}

export default Tagbar;
