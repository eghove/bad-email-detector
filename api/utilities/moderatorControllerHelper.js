//object that stores the custom errors if the checks fail.
const errorList = { customError: "" };

// helper function to make sure the data string is not empty
const checkIfNotEmpty = (data) => {
  data = data.trim();
  if (data.length > 0) {
    return true;
  } else {
    errorList.customError = "No text to evaluate.";
    return false;
  }
};

// helper function to make sure the data is properly function
const checkDataFormat = (data) => {
  if (data !== undefined && typeof data === "string") {
    return true;
  } else {
    errorList.customError = "Improperly formatted data.";
    return false;
  }
};

module.exports.errorList = errorList;
module.exports.checkIfNotEmpty = checkIfNotEmpty;
module.exports.checkDataFormat = checkDataFormat;
