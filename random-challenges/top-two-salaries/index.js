exports.topTwoSalaries = function topTwoSalaries(arr) {
  if (arr.length < 2) return console.error('Insufficient data to determine two salaries')
  if (arr.length === 2) return arr.sort()
  
  let topTwo = [0,0]

  arr.forEach( value => {
    if (value > topTwo[0] && value <= topTwo[1]) {
      topTwo[0] = value
    }else if (value > topTwo[0]) {
      let temp = topTwo[0]
      topTwo[0] = value 
      topTwo[1] = temp
    }
  })
  
  return topTwo
}