const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  console.log(arr);
  const words = [
    `--discard-next`,
    `--discard-prev`,
    `--double-next`,
    `--double-prev`,
  ];

  switch (arr) {
    case words[0]:
      arr.
      break;
    case words[1]:
      break;
    case words[2]:
      break;
    case words[3]:
      break;
    default:
      break;
  }
};
