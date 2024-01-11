import React from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

import "./kanban.scss";
import { KANBAN_COLUMNS } from "../../constants";
import KanbanColumn from "./kanbanColumn/KanbanColumn";
import Tagbar from "../ui/tagbar/Tagbar";
import Modal from "../ui/modal/Modal";
import KanbanCard from "./kanbanCard/KanbanCard";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { updateTaskStatus } from "./kanbanSlice";

function Kanban() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.kanban.tasks);
  const modalIsShown = useAppSelector((state) => state.modal.isShown);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    // Dropped outside of Droppable
    if (!destination) {
      return;
    }

    // Destination same as source
    if (destination.droppableId === source.droppableId) {
      return;
    }

    dispatch(updateTaskStatus({taskId: draggableId, newStatus: destination.droppableId}));
  }

  return (
    <div className="kanban">
      {modalIsShown && <Modal />}

      <Tagbar tags={["CS2100", "CS2030S", "CS2040S"]} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {KANBAN_COLUMNS.map((column) => (
            <Droppable key={column.columnId} droppableId={column.columnId}>
              {(provided) => (
                <KanbanColumn
                  columnHeader={column.columnTitle}
                  provided={provided}
                >
                  {tasks
                    .filter((task) => task.status === column.columnId)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <KanbanCard
                            title={task.id}
                            tag={task.id}
                            endDate={task.id}
                            provided={provided}
                          />
                        )}
                      </Draggable>
                    ))
                  }
                </KanbanColumn>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Kanban;
