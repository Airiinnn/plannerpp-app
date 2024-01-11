import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateTaskStatusPayload {
  taskId: string;
  newStatus: string;
}

// Todo: Temp initial state
const initialState = {
  tasks: [
    {
      id: "task-1",
      status: "to-do"
    },
    {
      id: "task-2",
      status: "in-progress"
    },
    {
      id: "task-3",
      status: "in-review"
    },
    {
      id: "task-4",
      status: "completed"
    }
  ]
}

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    updateTaskStatus: (state, action: PayloadAction<UpdateTaskStatusPayload>) => {
      const { taskId, newStatus } = action.payload;
      const targetTask = state.tasks.find((task) => task.id === taskId);
      targetTask && (targetTask.status = newStatus);
    }
  }
})

export const { updateTaskStatus } = kanbanSlice.actions;
export default kanbanSlice.reducer;
