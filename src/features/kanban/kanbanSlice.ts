import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColumnTaskIdOperationPayload {
  columnId: string;
  taskId: string;
}

const initialState = {
  "tasks": [
    { id: "task-1" },
    { id: "task-2" },
    { id: "task-3" },
    { id: "task-4" }
  ],
  "columns": [
    {
      id: "to-do",
      title: "To Do",
      taskIds: ["task-1"]
    },
    {
      id: "in-progress",
      title: "In Progress",
      taskIds: ["task-2"]
    },
    {
      id: "in-review",
      title: "In Review",
      taskIds: ["task-3"]
    },
    {
      id: "completed",
      title: "Completed",
      taskIds: ["task-4"]
    }
  ]
}

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    addColumnTaskId: (state, action: PayloadAction<ColumnTaskIdOperationPayload>) => {
      const { columnId, taskId } = action.payload;
      const targetColumn = state.columns.find((column) => column.id === columnId);
      targetColumn && targetColumn.taskIds.push(taskId);
    },

    removeColumnTaskId: (state, action: PayloadAction<ColumnTaskIdOperationPayload>) => {
      const { columnId, taskId } = action.payload;
      const targetColumn = state.columns.find((column) => column.id === columnId);
      if (targetColumn) {
        targetColumn.taskIds = targetColumn.taskIds.filter((id) => id !== taskId);
      }
    }
  }
})

export const { addColumnTaskId, removeColumnTaskId } = kanbanSlice.actions;
export default kanbanSlice.reducer;
