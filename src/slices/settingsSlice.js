import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    currency: "INR",
  },
  reducers: {
    updateCurrency(state, action) {
      state.currency = action.payload;
    },
  },
});

export const { updateCurrency } = settingsSlice.actions;
export default settingsSlice.reducer;
