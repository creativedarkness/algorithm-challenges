/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

exports.longestCommonPrefix = function (strs) {
  let result = strs[0]
  let length = result.length

  for (let x = 1; x < strs.length; x++) {
    while (strs[x].indexOf(result) !== 0) {
      result = result.substring(0, length - 1)
      length--

      console.log(result)

      if (result === '') {
        return ''
      }
    }
  }
  return result
}
