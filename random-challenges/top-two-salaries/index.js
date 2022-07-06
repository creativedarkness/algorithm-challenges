exports.topTwoSalaries = function topTwoSalaries(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return []
  if (arr.length === 2) return arr.sort()

  let topTwo = [0,0]
  const noDupes = [...new Set(arr)]

  if (noDupes.length === 1) return noDupes

  // let first = noDupes[0]
  // let second

  noDupes.forEach( value => {
    console.log({ value, topTwo_0: topTwo[0], topTwo_1: topTwo[1], topTwo })
    if (value > topTwo[0] && value <= topTwo[1]) {
      topTwo[0] = value
    } else if (value > topTwo[0]) {
      let temp = topTwo[0]
      topTwo[0] = value 
      topTwo[1] = temp
    }
  })

  console.log(topTwo)
  return topTwo
}
