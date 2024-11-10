import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import contactReducer from "../slices/contactDataSlice";
import themeReducer from "../slices/themeSlice";
import defaultDestinationsReducer from "../slices/defaultDestinationsSlice";
import homeToursReducer from "../slices/homeToursSlice";
import currencyDataReducer from "../slices/currencySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    contactDetails: contactReducer,
    themes: themeReducer,
    defaultDestinations: defaultDestinationsReducer,
    homeTours: homeToursReducer,
    currencyData: currencyDataReducer,
  },
});

export default store;
