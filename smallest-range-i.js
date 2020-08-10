/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * https://leetcode.com/problems/smallest-range-i/submissions/ 
 */
var smallestRangeI = function (A, K) {
    // Find the biggest number

    var sorted = A.slice().sort(function (a, b) {
        return a - b;
    });

    if (A.length != 1) {
        let initialDiff = sorted[sorted.length - 1] - sorted[0];
        if (initialDiff > K) {
            if (K * 2 > initialDiff) {
                return 0;
            } else {
                return (sorted[sorted.length - 1] - K) - (sorted[0] + K);
            }
        } else {
            return 0;
        }
    } else {
        return 0;
    }
};