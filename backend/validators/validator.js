const mongoose = require("mongoose");

const isValidName = function (value) {
  if (
    typeof value === "string" &&
    value.trim().length > 0 &&
    /^[A-Z]+[a-zA-Z0-9 ]*$/.test(value)
  )
    return true;
  return false;
};
const isValid = function (value) {
  if (typeof value === "string" && value.trim().length > 0) return true;
  return false;
};
const isValidPassword = function (value) {
  if (
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(value)
  )
    return true;
  return false;
};
const isValidMobile = function (mobile) {
    if (
        /^[0-9]{10}$/.test(mobile)
    ) return true;
    return false;
};
const isValidEmail = function (value) {
  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) return true;
  return false;
};

const isValidTitle = function (title) {
  return ["Mr", "Mrs", "Miss"].includes(title);
};

// const isValidRequestBody = function (requestBody) {
//   return Object.keys(requestBody).length > 0;
// };

const isValidDate = function(date){
    if (!/^(18|19|20)[0-9]{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date)) return false
    return true;
  }

  const isValidCity = function (value) {
    if (
      typeof value === "string" &&
      value.trim().length > 0 &&
      /^[a-zA-Z ]*$/.test(value)
    )
      return true;
    return false;
  };

  const isNotEmpty = function (value) {
    if (value.trim().length !== 0) return true;
    return false;
  }
  const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId);  
  }
  module.exports = {
    isValid,
    isValidTitle,
    // isValidRequestBody,
    isValidPassword,
    isValidEmail,
    isValidName,
    isValidMobile,
    isValidDate,
    isValidCity,
    isNotEmpty,
    isValidObjectId
  };