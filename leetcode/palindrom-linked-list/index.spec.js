const { isPalindrome } = require('./index')

describe('isPalindrome', () => {
  it('should return true if linked list is a palindrome', () => {
    const head = [1,2,2,1]
    const actual = isPalindrome(head)

    expect(actual).toBe('true')
  })

  it('should return false when linked list is not a palindrome', () => {
    const head = [1,2]
    const actual = isPalindrome(head)

    expect(actual).toBe('false')
  })
})