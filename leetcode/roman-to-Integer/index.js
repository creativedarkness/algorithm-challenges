const romanNumeralsValues = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900 ,
  M: 1000
}

const baseRomanNumeralsValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

/**
 * 
 * @param {string} str 
 * @returns {number}
 */
exports.romanToInt = function romanToInt (str) {
  let sum = 0

  for (let i = 0;  i < str.length; i++) {
    const current = baseRomanNumeralsValues[str[i]]
    const next = baseRomanNumeralsValues[str[i + 1]]

    if (current < next) {
      sum += next - current // IV -> 5-1 = 4
      i++
    } else {
      sum += current
    }
    
  }
  return sum
}
