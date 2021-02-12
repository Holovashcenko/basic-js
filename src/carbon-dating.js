const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  console.log(typeof sampleActivity);
  if (typeof sampleActivity === "string" && typeof +sampleActivity !== "number") {
    return Math.floor(
      Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
    );
  } else {
    return false;
  }
};
