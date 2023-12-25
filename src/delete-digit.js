const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArr = [];
  let num = n.toString();
  for (let i = 0; i < num.length; i++) {
    numArr.push(num.replace(num[i], ''))
  }

  return Math.max.apply(null, numArr);
}

module.exports = {
  deleteDigit
};
