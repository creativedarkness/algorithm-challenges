const { longestCommonPrefix } = require('./index')
/**
 * Example 1:
 *  Input: strs = ['flower','flow','flight']
 *  Output: 'fl'
 *
 * Example 2:
 *  Input: strs = ['dog','racecar','car']
 *  Output: ''
 *  Explanation: There is no common prefix among the input strings.
 */

describe('longestCommonPrefix', () => {
  it('should return an empty sing if there are no common prefixes', () => {
    const strs = ['dog', 'racecar', 'car']
    const expected = ''

    const actual = longestCommonPrefix(strs)

    expect(actual).toEqual(expected)
  })

  it('should return an the longest common prefix', () => {
    const strs = ['flower', 'flow', 'flight']
    const expected = 'fl'

    const actual = longestCommonPrefix(strs)

    expect(actual).toEqual(expected)
  })
})
