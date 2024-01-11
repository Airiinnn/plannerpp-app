import React from "react";

import "./tagbar.scss";
import CircleButton from "../ui/circleButton/CircleButton";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleSelected } from "../../slices/tagbarSlice";
import { showModal } from "../../slices/modalSlice";

function Tagbar() {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tagbar.tags);

  const showAddModalPayload = {
    modalType: "tag-add"
  }

  const showDeleteModalPayload = {
    modalType: "tag-delete"
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

      <CircleButton clickHandler={() => dispatch(showModal(showAddModalPayload))} text="+" invertColors={true} />
      <span className="tagbar__button-separator">/</span>
      <CircleButton clickHandler={() => dispatch(showModal(showDeleteModalPayload))} text="-" invertColors={true} />
    </div>
  );
}

export default Tagbar;
