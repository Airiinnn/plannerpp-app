import React from "react";

import "./kanban-column.scss";
import { KanbanColumnProps } from "../../../types";
import CircleButton from "../../ui/circleButton/CircleButton";

import { useAppDispatch } from "../../../app/hooks";
import { showModal } from "../../ui/modal/modalSlice";

function KanbanColumn({ columnHeader, children }: KanbanColumnProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="kanban-column">
      <h2 className="kanban-column__header">{columnHeader}</h2>

      <div className="kanban-column__content">
        {children}

        <CircleButton clickHandler={() => dispatch(showModal())} text="+" />
      </div>
    </div>
  );
}

export default KanbanColumn;
