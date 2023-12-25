const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addArr = [];
  for (let i = 0; i < (options.additionRepeatTimes ? options.additionRepeatTimes: 1) ; i += 1) {
    if (options.addition !== undefined ) addArr.push(`${options.addition}`);
  }
  let addStr = addArr.join(options.additionSeparator ? options.additionSeparator : '|')
  let resultArr = [];
  for (let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i += 1) {
    resultArr.push(str + addStr);
  }
  let resultStr = resultArr.join(options.separator ? options.separator : '+')
  return resultStr;
}
module.exports = {
  repeater
};
