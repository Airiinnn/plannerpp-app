import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowModalPayload {
  modalType: string;
  taskId?: string;
}

interface ModalState {
  isShown: boolean;
  modalType: string;
  selectedTaskId: string | null;
}

const initialState: ModalState = {
  isShown: false,
  modalType: "task-add",
  selectedTaskId: null
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ShowModalPayload>) => {
      state.modalType = action.payload.modalType;
      action.payload.taskId && (state.selectedTaskId = action.payload.taskId)
      state.isShown = true;
    },

    hideModal: (state) => {
      state.selectedTaskId = null;
      state.isShown = false
    }
  }
})

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
