const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let arrCats = [];
  let cats = [];
  for (let i = 0; i < arr.length; i++)
    arrCats.push(arr[i].filter((e) => e == "^^"));

  for (let j = 0; j < arrCats.length; j++)
    for (let n = 0; n < arrCats.length; n++)
      if (arrCats[j][n] == "^^") cats.push(arrCats[j][n]);

  return cats.length;
};
