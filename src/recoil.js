import { atom } from "recoil";

const appName = atom({
  key: "prefixAppName",
  default: "",
});

const originURL = atom({
  key: "origin",
  default: `${location.origin}`,
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

export { originURL, bookNowUser, appName };
