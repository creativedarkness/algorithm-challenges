const { twoSum, twoSumToo } = require('./index')

describe('twoSum function', () => {
  it('should return [0,1] when input is [2,7,11,15] and target is 9', () => {
    const nums = [2,7,11,15]
    const target = 9
    const expected = [0,1]
    const actual = twoSum(nums, target)
    
    expect(actual).toEqual(expected)
  })

  it('should return [1,2] when input is [3,2,4] and target is 6', () => {
    const nums = [3,2,4]
    const target = 6
    const expected = [1,2]
    const actual = twoSum(nums, target)
    
    expect(actual).toEqual(expected)
  })

  it('should return [0,1] when input is [3,3] and target is 6', () => {
    const nums = [3,3]
    const target = 6
    const expected = [0,1]
    const actual = twoSum(nums, target)
    
    expect(actual).toEqual(expected)
  })
})

describe('twoSumToo function', () => {
  it('should return [0,1] when input is [2,7,11,15] and target is 9', () => {
    const nums = [2,7,11,15]
    const target = 9
    const expected = [0,1]
    const actual = twoSumToo(nums, target)
    
    expect(actual).toEqual(expected)
  })

  it('should return [1,2] when input is [3,2,4] and target is 6', () => {
    const nums = [3,2,4]
    const target = 6
    const expected = [1,2]
    const actual = twoSumToo(nums, target)
    
    expect(actual).toEqual(expected)
  })

  it('should return [0,1] when input is [3,3] and target is 6', () => {
    const nums = [3,3]
    const target = 6
    const expected = [0,1]
    const actual = twoSumToo(nums, target)
    
    expect(actual).toEqual(expected)
  })
})