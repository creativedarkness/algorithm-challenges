const { romanToInt } = require('./index')

describe('Roman to Integer', () => {
  it('should return 3 when input is "III"', () => {
    const input = 'III'
    const expected = 3
    const actual = romanToInt(input)

    expect(actual).toEqual(expected)
  })

  it('should return 58 when input is "LVIII"', () => {
    const input = 'LVIII'
    const expected = 58
    const actual = romanToInt(input)

    expect(actual).toEqual(expected)
  })

  it('should return 1994 when input is "MCMXCIV"', () => {
    const input = 'MCMXCIV'
    const expected = 1994
    const actual = romanToInt(input)

    expect(actual).toEqual(expected)
  })
})