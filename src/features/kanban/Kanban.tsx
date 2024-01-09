import React from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

import "./kanban.scss";
import KanbanColumn from "./kanbanColumn/KanbanColumn";
import Tagbar from "./tagbar/Tagbar";
import Modal from "../ui/modal/Modal";
import KanbanCard from "./kanbanCard/KanbanCard";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addColumnTaskId, removeColumnTaskId } from "./kanbanSlice";

function Kanban() {
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.kanban.columns);
  const modalIsShown = useAppSelector((state) => state.modal.isShown);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    // Dropeed outside of Droppable
    if (!destination) {
      return;
    }

    // Destination same as source
    if (destination.droppableId === source.droppableId) {
      return;
    }

    dispatch(addColumnTaskId({"columnId": destination.droppableId, "taskId": draggableId}));
    dispatch(removeColumnTaskId({"columnId": source.droppableId, "taskId": draggableId}));
  }

  return (
    <div className="kanban">
      {modalIsShown && <Modal />}

      <Tagbar tags={["CS2100", "CS2030S", "CS2040S"]} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {columns.map((column) => (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <KanbanColumn
                  columnHeader="To Do"
                  provided={provided}
                >
                  {column.taskIds.map((taskId, index) => (
                    <Draggable key={taskId} draggableId={taskId} index={index}>
                      {(provided) => (
                        <KanbanCard
                          title={taskId}
                          tag={taskId}
                          endDate={taskId}
                          provided={provided}
                        />
                      )}
                    </Draggable>
                  ))}
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
