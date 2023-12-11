/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *  Open brackets must be closed by the same type of brackets
 *  Open brackets must be closed in the correct order
 *  Every close bracket has a corresponding open bracket of the same type.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
exports.isValid = function (str) {
  const stack = []
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (const char of str) {
    if (pairs[char]) {
      stack.push(char)
    } else if (char === ')' || char === '}' || char === ']') {
      if (pairs[stack.pop()] !== char) {
        return false
      }
    }
  }

  return stack.length === 0
}
