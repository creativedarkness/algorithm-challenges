const { isPalindrome } = require('./index')
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

describe('isPalindrome', () => {
  it('should return false if value is not a number or is a negative number', () => {
    const num = -121

    expect(isPalindrome(num)).toBe(false)
  })

  it ('should return false if number is only two digits and they are not the same', () => {
    const num = 10

    expect(isPalindrome(num)).toBe(false)
  })

  it ('should return true if number is only two digits and they are the same', () => {
    const num = 11

    const reversed = parseInt(num.toString().split('').reverse().join(''))

    expect(isPalindrome(num)).toBe(true)
  })

  it('should return true is number is a palindrome', () => {
    const num = 121

    expect(isPalindrome(num)).toBe(true)
  })
})