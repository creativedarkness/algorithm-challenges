/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

exports.twoSum = function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let x = i + 1; x < nums.length; x++) {
        if (nums[i] + nums[x] === target) {
          return [i, x]
        }
      }
    }
}

exports.twoSumToo =  function twoSumToo(nums, target) {
  let indices = {}

  for (let i = 0; i < nums.length; i++) {
    let startingNum = target - nums[i]
    if (indices[startingNum] !== undefined) {
      return [indices[startingNum], i]
    }
    indices[nums[i]] = i
  }
}