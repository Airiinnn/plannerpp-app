import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TagbarState {
  tags: Tag[];
}

interface Tag {
  title: string;
  selected: boolean;
}

// Todo: Temp initial state
const initialState: TagbarState = {
  tags: [
    {
      title: "CS2100",
      selected: false
    },
    {
      title: "CS2030S",
      selected: false
    },
    {
      title: "CS2040S",
      selected: false
    },
    {
      title: "IS1108",
      selected: false
    },
    {
      title: "IS1128",
      selected: false
    },
    {
      title: "ES2660",
      selected: false
    },
    {
      title: "GEC1000",
      selected: false
    },
    {
      title: "LAJ1201",
      selected: false
    },
  ]
}

export const tagbarSlice = createSlice({
  name: "tagbar",
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {},

    toggleSelected: (state, action: PayloadAction<string>) => {
      const targetTag = state.tags.find((tag) => tag.title === action.payload);
      targetTag && (targetTag.selected = !targetTag.selected);
    }
  }
})

export const { addTag, toggleSelected } = tagbarSlice.actions;
export default tagbarSlice.reducer;
