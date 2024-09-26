import { PhoneNumberUtil } from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();
export const isPhoneValid = (phone) => {
     try {
          return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
     } catch (error) {
          console.error(error)
          return false;
     }
};

export const capitalizeWords = (string) => {
     let stringArr = string.split(/[- ]/g).map(item => `${item[0].toUpperCase()}${item.substring(1)}`)
     return stringArr.join(" ")
}