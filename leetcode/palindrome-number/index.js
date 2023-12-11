/**
 * @param {Number}
 * @returns {boolean}
 */

exports.isPalindrome = function (num) {
  const numString = num.toString()
  if (num < 0 || !Number.isInteger(num)) return false
  if (numString.length === 2 && (numString[0] !== numString[1])) return false

  const reversed = parseInt(numString.split('').reverse().join(''))

  return num === reversed
}
