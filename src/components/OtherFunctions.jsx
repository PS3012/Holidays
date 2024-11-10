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

export const formatPrice = ({ currency, code }, price) => {
     return new Intl.NumberFormat(code, {
          style: 'currency',
          currency: currency,
          currencyDisplay: 'code',
          maximumFractionDigits: 0
     }).format(parseInt(price));
}

export const generateUUID = () => {
     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
     });
}