import { createSlice } from "@reduxjs/toolkit";

const themeDataSlice = createSlice({
  name: "themes",
  initialState: {
    data: {},
  },
  reducers: {
    getAllThemes(state, action) {
      state.themes = [...action.payload];
    },
    addSingleTheme(state, action) {
      state.themes = [...state.themes, action.payload];
    },
    deleteSingleTheme(state, action) {
      const idx = state.themes.findIndex((ele) => ele.id === action.payload);
      if (idx >= 0) state.themes.splice(idx, 1);
    },
  },
});

export const { addSingleTheme, getAllThemes, deleteSingleTheme } =
  themeDataSlice.actions;
export default themeDataSlice.reducer;
