import React from "react";

import "./kanban-card.scss";
import { KanbanCardProps } from "../../../types";

import { useAppDispatch } from "../../../app/hooks";
import { showModal } from "../../../slices/modalSlice";

function KanbanCard({ id, title, tag, endDate, provided }: KanbanCardProps) {
  const dispatch = useAppDispatch();

  const showModalPayload = {
    modalType: "task-update",
    taskId: id
  }

  return (
    <div
      className="kanban-card"
      onClick={() => dispatch(showModal(showModalPayload))}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <h2 className="kanban-card__text kanban-card__title">{title}</h2>
      <h3 className="kanban-card__text kanban-card__tag">{tag}</h3>
      <h3 className="kanban-card__text kanban-card__date">End: <span className="kanban-card__date--bold">{endDate}</span></h3>
    </div>
  );
}

export default KanbanCard;
