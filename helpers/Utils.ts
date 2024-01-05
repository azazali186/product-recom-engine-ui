import auth from "../store/auth";
import moment from "moment";
import { i18n } from "../config/i18n";
const { t } = i18n.global;

import qs from "qs";

export const getQueryData = (jsonObject: any) => {
  const queryParams = qs.stringify(jsonObject);

  return queryParams;
};

class CustomError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = ""; // set the name property to identify the error type
  }
}
export const convertVariationsArray = (inputArray: any[]) => {
  const result: any[] = [];

  inputArray.forEach((item) => {
    const existingItem = result.find(
      (resultItem) => resultItem.name === item.name
    );

    if (existingItem) {
      existingItem.values.push(item.value);
    } else {
      result.push({
        name: item.name,
        values: [item.value],
      });
    }
  });

  return result;
};

export default class Utils {
  static getErrorMessage(err: any) {
    console.log(err.response);
    if (err.response) {
      if (err.response.data.messages) {
        return new CustomError(t(err.response.data.messages[0]));
      }
      return new CustomError(t(err.response.data.message));
    }

    return new CustomError(t(err.toString()));
  }

  static canAccess(permittedRoles: string | never[]) {
    let roleExists = auth.state.roles.filter((role) =>
      permittedRoles.includes(role)
    );
    return roleExists.length > 0;
  }

  static hasPermissions(requiredPermissions: any[]) {
    let permissions = auth.state.user.permissions.filter(
      (permission: string) => {
        return requiredPermissions
          .map((p: string) => p.toLowerCase())
          .includes(permission.toLowerCase());
      }
    );

    return permissions.length > 0;
  }

  static formatCurrency(
    amount: number | bigint,
    currency = "USD",
    locale = "en"
  ) {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  }

  static getKey(string: string) {
    return string
      ? string
          .toString()
          .toLowerCase()
          .trim()
          .replaceAll(/[^a-zA-Z0-9 ]/g, " ")
          .replaceAll(" ", "_")
      : "Q";
  }

  static dateTranslation(type: any) {
    switch (type) {
      case "days":
        return [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
      case "daysShort":
        return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      case "monthsShort":
        return [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
      case "months":
        return [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
    }
  }

  static randomString = (length: number) => {
    let chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let output = "";
    for (let x = 0; x < length; x++) {
      let i = Math.floor(Math.random() * 62);
      output += chars.charAt(i);
    }
    return output;
  };

  static onlyPostiveInteger(evt: any, canStartWithZero = false, length = 12) {
    let pattern = /^\d*[0-9]\d*$/;

    if (!pattern.test(evt.target.value)) {
      if (!canStartWithZero) {
        evt.target.value = 0;
      } else {
        evt.target.value = "";
      }
      //  canStartWithZero ? 0 : "";
    }
    // else {
    //   evt.target.value = canStartWithZero
    //     ? evt.targets.value
    //     : parseInt(evt.target.value);
    // }
    if (evt.target.value.length > length) {
      evt.target.value = evt.target.value.slice(0, length);
    }
  }

  static onlyPostiveIntegerEmpty(
    evt: any,
    canStartWithZero = false,
    length = 12
  ) {
    let pattern = /^\d*[0-9]\d*$/;

    if (!pattern.test(evt.target.value)) {
      if (!canStartWithZero) {
        evt.target.value = 0;
      } else {
        // evt.target.value = "";
      }
      //  canStartWithZero ? 0 : "";
    } else {
      evt.target.value = canStartWithZero
        ? evt.targets.value
        : parseInt(evt.target.value);
    }
    if (evt.target.value.length > length) {
      evt.target.value = evt.target.value.slice(0, length);
    }
  }

  static numberValidation = (event: any, length = 4) => {
    if (event.target.value.length > length) {
      event.target.value = event.target.value.slice(0, length);
    } else {
      event.target.value = event.target.value.replace("-", "");
      event.target.value = event.target.value.replace(".", "");
    }
  };

  static clipboard = (val: string) => {
    navigator.clipboard.writeText(val);
  };

  static validationSpecailCaracter(evt: any, space = true) {
    let pattern = /^[a-zA-Z0-9 ._-]*$/;
    if (!space) {
      pattern = /^[a-zA-Z0-9._-]*$/;
    }
    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  }

  static validationSpecailCaracter2(evt: any, space = true) {
    let pattern = /^[a-zA-Z0-9-]*$/;
    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  }

  static validationOnlyNumber(val: string) {
    let pattern = /^[0-9]*$/;
    if (!pattern.test(val)) {
      return true;
    }
    return false;
  }
  //Only numbers are allowed carriers
  static validationOnlyNumberEvent(evt: any, space = true) {
    let pattern = /^[0-9]*$/;
    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  }
  //Only numbers are allowed carriers
  static validationOnlyNumberDecimalEvent(
    evt: { target: { value: string } },
    space = true
  ) {
    let pattern = /^[0-9.]*$/;
    let matches = evt.target.value.match(/\./g);
    // console.log(matches,'match');
    if (matches != null) {
      if (matches.length == 2) {
        evt.target.value = evt.target.value.slice(
          0,
          evt.target.value.length - 1
        );
      }
    }

    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  }

  static validationOnlyNumberPhone(evt: any, space = true) {
    let pattern = /^[0-9+]*$/;
    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  }
  // only numbers are allowed for ISO
  static validationOnlyNumberForIso(evt: any, space = true) {
    let pattern = /^[+0-9]*$/;
    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  }

  static validationNumberAndCaracter(evt: any, space = false) {
    let pattern = /^[a-zA-Z0-9 ]*$/;
    if (!space) {
      pattern = /^[a-zA-Z0-9]*$/;
    }
    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  }

  static isNoSpecailCharacter(val: string) {
    let pattern = /^[a-zA-Z0-9-]*$/;
    if (!pattern.test(val)) {
      return true;
    }
    return false;
  }

  static formatRangePickerDate(d: any[]) {
    if (!d) return "";

    return d.map((t: moment.MomentInput, i: number) =>
      i === 0
        ? moment(t).startOf("day").format("YYYY-MM-DD HH:mm")
        : moment(t).endOf("day").format("YYYY-MM-DD HH:mm")
    );
  }

  static filterDropdownOptions(
    options: any[],
    value: string,
    updateFn: (arg0: { (): any; (): void }) => void,
    searchField = ""
  ) {
    let filtered: never[] = [];

    if (value === "") {
      updateFn(() => {
        return options;
      });

      return options;
    }

    updateFn(() => {
      filtered = options.filter((item) => {
        if (searchField === "") {
          return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
        }

        return (
          item[searchField].toLowerCase().indexOf(value.toLowerCase()) > -1
        );
      });
    });

    return filtered;
  }

  static validateIP(evt: any) {
    let pattern = /^[A-Z0-9.*]*$/;

    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  }

  static throttle = (
    fn: (arg0: any) => void,
    delay: number,
    pause = false,
    override = false
  ) => {
    console.log("throttle");
    let lastTime = 0;

    return (...args: any) => {
      let now = moment();

      if (pause) return;

      console.log(now, lastTime);
      if (now - lastTime < delay && !override) return;

      console.log("throttle called");

      lastTime = now;
      fn(...args);
    };
  };

  static containsNumbersAndCaracter = (str: string) => {
    let pattern = /^[a-zA-Z0-9]*$/;
    return Boolean(pattern.test(str));
  };
  static containsNumbersAndCaracterAt = (str: string) => {
    let pattern = /^[a-zA-Z0-9@]*$/;
    return Boolean(pattern.test(str));
  };

  static containsOnlyNumbers = (str: string) => {
    return /^\d+$/.test(str);
  };
  static containsOnlyNumbersAndDecimal = (str: string) => {
    return /^[0-9.]*$/.test(str);
  };

  static containsOnlyCharacter = (str: string) => {
    return /^[a-zA-Z]*$/.test(str);
  };

  static containsOnlyCharacter2 = (str: string) => {
    return str.replace(/[^a-zA-Z ]/g, "").replace(/[0-9]/g, "");
  };

  static containsOnlyCharacterAllLanguage = (str: string) => {
    let ch = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(str);
    return !ch;
  };
  static containsOnlyCharacterAllLanguageEvent = (evt: any) => {
    let pattern = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
    if (pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  };

  static containsOnlyCharacterExeptDash = (str: string) => {
    let ch = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/.test(str);
    return !ch;
  };

  static containsOnlyNumber2 = (str: string) => {
    return str.replace(/[a-zA-Z]+/gi, "");
  };

  static onlyLettersAndNumbersandSpace = (str: string) => {
    // return str.replace( /^[A-Za-z0-9]*$/);
    return /^[A-Za-z0-9 ]*$/.test(str);
  };

  static onlyLettersAndNumbersandSpaceEvent = (evt: any) => {
    let pattern = /^[A-Za-z0-9 ]*$/;
    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  };

  static onlyLettersAndSpace = (str: string) => {
    // return str.replace( /^[A-Za-z0-9]*$/);
    return /^[A-Za-z ]*$/.test(str);
  };

  static onlyLettersAndSpaceEvent = (evt: any) => {
    let pattern = /^[A-Za-z ]*$/;
    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  };

  static onlyEmail = (str: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
  };

  static urlValidation = (str: string) => {
    let pattern =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return pattern.test(str);
  };

  static urlValidationEvent = (evt: any) => {
    let pattern =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (!pattern.test(evt.target.value)) {
      evt.target.value = evt.target.value.slice(0, evt.target.value.length - 1);
    }
  };
}
