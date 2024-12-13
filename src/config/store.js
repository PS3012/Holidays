import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import contactReducer from "../slices/contactDataSlice";
import themeReducer from "../slices/themeSlice";
import defaultDestinationsReducer from "../slices/defaultDestinationsSlice";
import homeToursReducer from "../slices/homeToursSlice";
import settingsDataReducer from "../slices/settingsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    contactDetails: contactReducer,
    themes: themeReducer,
    defaultDestinations: defaultDestinationsReducer,
    homeTours: homeToursReducer,
    settingsReducer: settingsDataReducer,
  },
});

export default store;
