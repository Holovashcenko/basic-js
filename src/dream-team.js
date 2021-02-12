const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const command = [];
  if (members) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") command.push(members[i]);
    }
  }
  console.log(command);
  if (command.length != 0) {
    return command
      .map((j) => j.trim())
      .map((e) => e.charAt(0))
      .join("")
      .toUpperCase()
      .split("")
      .sort()
      .join("");
  } else {
    return false;
  }
};
