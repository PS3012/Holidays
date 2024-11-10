import { createSlice } from "@reduxjs/toolkit";

const defaultDestinationsSlice = createSlice({
  name: "destinations",
  initialState: {
    data: {},
  },
  reducers: {
    getAllDestinations(state, action) {
      state.destinations = [...action.payload];
    },
    addSingleDestination(state, action) {
      state.destinations = [...state.destinations, action.payload];
    },
    deleteSingleDestination(state, action) {
      const idx = state.destinations.findIndex(
        (ele) => ele.id === action.payload
      );
      if (idx >= 0) state.destinations.splice(idx, 1);
    },
  },
});

export const {
  addSingleDestination,
  getAllDestinations,
  deleteSingleDestination,
} = defaultDestinationsSlice.actions;
export default defaultDestinationsSlice.reducer;
