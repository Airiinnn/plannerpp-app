import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isShown: boolean;
  modalType: string;
}

const initialState: ModalState = {
  isShown: false,
  modalType: "task-add"
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<string>) => {
      state.modalType = action.payload;
      state.isShown = true;
    },

    hideModal: (state) => {
      state.isShown = false
    }
  }
})

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
