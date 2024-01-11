import React from "react";

import "./kanban-column.scss";
import { KanbanColumnProps } from "../../../types";
import CircleButton from "../../ui/circleButton/CircleButton";

import { useAppDispatch } from "../../../app/hooks";
import { showModal } from "../../../slices/modalSlice";

function KanbanColumn({ columnHeader, provided, children }: KanbanColumnProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="kanban-column">
      <h2 className="kanban-column__header">{columnHeader}</h2>

      <div
        className="kanban-column__content"
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        {children}
        {provided.placeholder}

        <CircleButton clickHandler={() => dispatch(showModal("task-add"))} text="+" />
      </div>
    </div>
  );
}

export default KanbanColumn;
