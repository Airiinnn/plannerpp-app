import React from "react";

import "./kanban-card.scss";
import { KanbanCardProps } from "../../../types";

import { useAppDispatch } from "../../../app/hooks";
import { showModal } from "../../../slices/modalSlice";

function KanbanCard({ title, tag, endDate, startDate = null, provided }: KanbanCardProps) {
  const dispatch = useAppDispatch();

  return (
    <div
      className="kanban-card"
      onClick={() => dispatch(showModal("task-update"))}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <h2 className="kanban-card__title">{title}</h2>
      <h3 className="kanban-card__tag">{tag}</h3>
      <h3 className="kanban-card__date">Deadline: <span className="kanban-card__date--bold">{endDate}</span></h3>
    </div>
  );
}

export default KanbanCard;
