import { createSlice } from "@reduxjs/toolkit";

const contactDataSlice = createSlice({
  name: "data",
  initialState: {
    data: {},
  },
  reducers: {
    updateContactData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { updateContactData } = contactDataSlice.actions;
export default contactDataSlice.reducer;
