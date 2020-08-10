/**
 * @param {number[]} nums
 * @return {number}
    https://leetcode.com/problems/single-number/
 */

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
var singleNumber = function (nums) {
    var numberMap = new Map();
    for (let number of nums) {
        if (numberMap.has(number)) {
            numberMap.delete(number);
        } else {
            numberMap.set(number, number);
        }
    }
    return Array.from(numberMap.keys())[0];
};