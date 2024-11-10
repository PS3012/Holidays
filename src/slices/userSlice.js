import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    loginUser(state, action) {
      localStorage.setItem("driveUser", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logoutUser(state) {
      localStorage.removeItem("driveUser");
      state.user = {};
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
