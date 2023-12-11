const { isValid } = require('./index')
/**
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 */

describe('valid parentheses', () => {
  it('should return true if the string is valid', () => {
    const str1 = '()'
    const str2 = '()[]{}'

    expect(isValid(str1)).toBe(true)
    expect(isValid(str2)).toBe(true)
  })
  it('should return false if the string is invalid', () => {
    const str3 = '(]'
    const str4 = '()[{}'

    expect(isValid(str3)).toBe(false)
    expect(isValid(str4)).toBe(false)
  })
})
