/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 *
 */

// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
  // Maybe remove all nums greater than target
  // Add number at index i with number at index j

  for (let i = 0; i < nums.length; ++i) {
    // j = i + 1 as each number can only be used once
    for (let j = i + 1; j < nums.length; ++j) {
      //   console.log(`${nums[i]} + ${nums[j]} = ${nums[i] + nums[j]}`);
      //Since there is always only one solution simply return
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// let nums = [2, 7, 11, 15];
// let target = 9;

// console.log(twoSum(nums, target));
