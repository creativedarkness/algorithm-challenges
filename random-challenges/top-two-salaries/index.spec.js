const { topTwoSalaries} = require('./index')

describe('topTwoSalaries', () => {
  it('should return [666, 222]', () => {
    const salaries = [1, 5, 222, 34, 66, 2, 90, 666]
    const expected = [666, 222]
    const actual = topTwoSalaries(salaries)
    expect(actual).toEqual(expected)
  })

  it('should return the given array when the length is 2', () => {
    const salaries = [90, 666]
    const expected = [666, 90]
    const actual = topTwoSalaries(salaries)
    expect(actual).toEqual(expected)
  })

  it('should return a console error when array length is less than 2', () => {
    const err = jest.spyOn(console, 'error').mockImplementation(() => {})
    const salaries = [90]
    topTwoSalaries(salaries)
    expect(err).toBeCalledWith('Insufficient data to determine two salaries')

    err.mockReset()
  })
})