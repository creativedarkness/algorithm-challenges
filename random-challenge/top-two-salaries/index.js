exports.topTwoSalaries = function topTwoSalaries(arr) {
  let topTwo = [0,0]
  if (arr.length === 2) return arr

  arr.forEach( value => {
    if (value > topTwo[0] && value <= topTwo[1]) {
      topTwo[0] = value
    }else if (value > topTwo[1]) {
      let temp = topTwo[1]
      topTwo[1] = value
      topTwo[0] = temp
    }
  })
  return topTwo
}