import { createSlice } from "@reduxjs/toolkit";

const currencyDataSlice = createSlice({
  name: "currencyData",
  initialState: {
    currency: "INR",
    code: "en-IN",
  },
  reducers: {},
});

export default currencyDataSlice.reducer;
