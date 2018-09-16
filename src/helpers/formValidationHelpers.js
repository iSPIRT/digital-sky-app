export const invalidEmail = value => {
  return value && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(value);
};

export const invalidDateOfBirth = value => {
  if (!value) return false;
  if (!/\d{2}-\d{2}-\d{4}/i.test(value)) return true;
  const valueTokens = value.split("-");
  const date = parseInt(valueTokens[0], 10);
  const month = parseInt(valueTokens[1], 10) - 1;
  const year = parseInt(valueTokens[2], 10);
  const valueAsDate = new Date(year, month, date);
  if (isNaN(valueAsDate.getTime())) return true;
  if (
    valueAsDate.getDate() !== date ||
    valueAsDate.getMonth() !== month ||
    valueAsDate.getFullYear() !== year
  ) {
    return true;
  }
  const currentDate = new Date();
  const dateDiffInYears =
    (currentDate.getTime() - valueAsDate.getTime()) / (1000 * 3600 * 24 * 365);
  if (dateDiffInYears < 5) return true;
  if (dateDiffInYears > 100) return true;
  return false;
};

export const invalidDate = value => {
  if (!value) return false;
  if (!/\d{2}-\d{2}-\d{4}/i.test(value)) return true;
  const valueTokens = value.split("-");
  const date = parseInt(valueTokens[0], 10);
  const month = parseInt(valueTokens[1], 10) - 1;
  const year = parseInt(valueTokens[2], 10);
  const valueAsDate = new Date(year, month, date);
  if (isNaN(valueAsDate.getTime())) return true;
  if (
    valueAsDate.getDate() !== date ||
    valueAsDate.getMonth() !== month ||
    valueAsDate.getFullYear() !== year
  ) {
    return true;
  }
  const currentDate = new Date();
  const dateDiff = (currentDate.getTime() - valueAsDate.getTime()) / 1000;
  if (dateDiff < 1) return true;
  return false;
};

export const invalidFutureDate = value => {
  if (!value) return false;
  if (!/\d{2}-\d{2}-\d{4}/i.test(value)) return true;
  const valueTokens = value.split("-");
  const date = parseInt(valueTokens[0], 10);
  const month = parseInt(valueTokens[1], 10) - 1;
  const year = parseInt(valueTokens[2], 10);
  const valueAsDate = new Date(year, month, date);
  if (isNaN(valueAsDate.getTime())) return true;
  if (
    valueAsDate.getDate() !== date ||
    valueAsDate.getMonth() !== month ||
    valueAsDate.getFullYear() !== year
  ) {
    return true;
  }
  const currentDate = new Date();
  const dateDiff = (currentDate.getTime() - valueAsDate.getTime()) / 1000;
  if (dateDiff >= 0) return true;
  return false;
};

export const invalidTime = value => {
  if (!value) return false;
  if (!/\d{2}:\d{2}/i.test(value)) return true;
  const valueTokens = value.split(":");
  const hour = parseInt(valueTokens[0], 10);
  const minutes = parseInt(valueTokens[1], 10);
  if (hour > 23) return true;
  if (minutes > 59) return true;
  return false;
};

export const invalidName = value => {
  return value && !/^[a-zA-Z ]*$/i.test(value);
};

export const emptyValue = value => !value || value.trim().length === 0;

export const minLength = (value, length) => value.length < length;

export const validateForm = form => {
  var fieldErrors = {};
  const inputElements = form.getElementsByTagName("input");
  for (const inputElement of inputElements) {
    fieldErrors = validateField(fieldErrors, inputElement);
  }
  const selectElements = form.getElementsByTagName("select");
  for (const selectElement of selectElements) {
    fieldErrors = validateSelectField(fieldErrors, selectElement);
  }
  return fieldErrors;
};

export const invalidDateOfManufacture = value => {
  if (!value) return false;
  if (!/\d{2}-\d{2}-\d{4}/i.test(value)) return true;
  const valueTokens = value.split("-");
  const date = parseInt(valueTokens[0], 10);
  const month = parseInt(valueTokens[1], 10) - 1;
  const year = parseInt(valueTokens[2], 10);
  const valueAsDate = new Date(year, month, date);
  if (isNaN(valueAsDate.getTime())) return true;
  if (
    valueAsDate.getDate() !== date ||
    valueAsDate.getMonth() !== month ||
    valueAsDate.getFullYear() !== year
  )
    return true;
  const currentDate = new Date();
  const dateDiffInYears =
    (currentDate.getTime() - valueAsDate.getTime()) / (1000 * 3600 * 24 * 365);
  if (dateDiffInYears > 100) return true;
  if (dateDiffInYears <= 0) return true;
  return false;
};

export const validateField = (fieldErrors, field) => {
  if (field.tagName === "INPUT" && !field.readOnly) {
    if (!field.getAttribute("validate")) return fieldErrors;
    const validations = field.getAttribute("validate").split(",");
    for (const validation of validations) {
      if (validation.trim() === "required" && emptyValue(field.value)) {
        return {
          ...fieldErrors,
          [field.name]: { message: "Required", valid: false }
        };
      } else if (validation.trim() === "email" && invalidEmail(field.value)) {
        return {
          ...fieldErrors,
          [field.name]: { message: "Invalid Email", valid: false }
        };
      } else if (
        validation.trim() === "alphabetsOnly" &&
        invalidName(field.value)
      ) {
        return {
          ...fieldErrors,
          [field.name]: { message: "Alphabets Only", valid: false }
        };
      } else if (
        validation.trim() === "minLength8" &&
        minLength(field.value, 8)
      ) {
        return {
          ...fieldErrors,
          [field.name]: { message: "Minimum Length 8", valid: false }
        };
      } else if (
        validation.trim() === "dateOfBirth" &&
        invalidDateOfBirth(field.value)
      ) {
        return {
          ...fieldErrors,
          [field.name]: { message: "Invalid Date of Birth", valid: false }
        };
      } else if (
        validation.trim() === "dateOfManufacture" &&
        invalidDateOfManufacture(field.value)
      ) {
        return {
          ...fieldErrors,
          [field.name]: { message: "Invalid Date of Manufacture", valid: false }
        };
      } else if (validation.trim() === "date" && invalidDate(field.value)) {
        return {
          ...fieldErrors,
          [field.name]: { message: "Invalid Date", valid: false }
        };
      } else if (validation.trim() === "futureDate" && invalidFutureDate(field.value)) {
        return {
          ...fieldErrors,
          [field.name]: { message: "Invalid Date", valid: false }
        };
      } else if (validation.trim() === "time" && invalidTime(field.value)) {
        return {
          ...fieldErrors,
          [field.name]: { message: "Invalid Time", valid: false }
        };
      }
    }
    return {
      ...fieldErrors,
      [field.name]: { message: undefined, valid: true }
    };
  } else if (field.tagName === "SELECT" && !field.disabled) {
    return validateSelectField(fieldErrors, field);
  }
};

export const validateSelectField = (fieldErrors, field) => {
  if (!field.disabled) {
    if (!field.getAttribute("validate")) return fieldErrors;
    const validations = field.getAttribute("validate").split(",");
    for (const validation of validations) {
      if (validation.trim() === "required" && field.value === "-1") {
        return {
          ...fieldErrors,
          [field.name]: { message: "Required", valid: false }
        };
      }
    }
  }
  return {
    ...fieldErrors,
    [field.name]: { message: undefined, valid: true }
  };
};

export const decorateInputClass = (fieldError, classes) => {
  if (fieldError) {
    if (fieldError.valid) {
      classes.push("valid");
    } else {
      classes.push("error");
    }
  }
  return classes.join(" ");
};
