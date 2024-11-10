import { createSlice } from "@reduxjs/toolkit";

const homeTourSlice = createSlice({
  name: "homeTours",
  initialState: {
    data: {},
  },
  reducers: {
    getAllHomeTours(state, action) {
      state.homeTours = [...action.payload];
    },
    addSingleHomeTour(state, action) {
      state.homeTours.push(action.payload);
    },
    deleteSingleHomeTour(state, action) {
      const idx = state.homeTours.findIndex((ele) => ele.id === action.payload);
      if (idx >= 0) state.homeTours.splice(idx, 1);
    },
  },
});

export const { addSingleHomeTour, getAllHomeTours, deleteSingleHomeTour } =
  homeTourSlice.actions;
export default homeTourSlice.reducer;
