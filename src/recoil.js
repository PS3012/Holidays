import { atom } from "recoil";

const APP_NAME = import.meta.env.VITE_APP_NAME;

const baseApiUrl = atom({
  key: "apiUrl",
  default: `http://160.25.62.168${APP_NAME}`,
});

const appName = atom({
  key: "prefixAppName",
  default: APP_NAME,
});

const originURL = atom({
  key: "origin",
  default: `${location.origin}${APP_NAME}`,
});

const bookNowUser = atom({
  key: "user",
  default: {
    salutation: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobileNumber: "",
    travellerDate: "",
    selectableDate: "",
  },
});

export { originURL, bookNowUser, baseApiUrl, appName };
