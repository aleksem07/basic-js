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
  console.log(
    'string: ' +
      str +
      ' repeatTimes: ' +
      options.repeatTimes +
      ' separator: ' +
      options.separator +
      ' addition: ' +
      options.addition +
      ' additionRepeatTimes: ' +
      options.additionRepeatTimes +
      ' additionSeparator: ' +
      options.additionSeparator
  );
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.addition) {
    options.addition = '';
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  arr = new Array(options.repeatTimes - 1);
  arr.push(str);

  return arr.fill(str + options.addition).join(options.separator);
}

module.exports = {
  repeater,
};
