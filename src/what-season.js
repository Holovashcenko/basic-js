const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!date)
    return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date) !== "[object Date]")
     throw "THROWN"

  switch (date.getMonth() + 1) {
    case 12:
      return "winter";
      break;
    case 11:
      return "autumn";
      break;
    case 10:
      return "autumn";
      break;
    case 9:
      return "autumn";
      break;
    case 8:
      return "summer";
      break;
    case 7:
      return "summer";
      break;
    case 6:
      return "summer";
      break;
    case 5:
      return "spring";
      break;
    case 4:
      return "spring";
      break;
    case 3:
      return "spring";
      break;
    case 2:
      return "winter";
      break;
    case 1:
      return "winter";
      break;

    default:
      throw new Error();
  }
};
