/**
 * - 题目：
 * - 题目地址：
 * - 解题思路：
 * - 复杂度分析：
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 思路：滑动窗口
// 构建一个长度为2k的数组，前半部分单调递增，后半部分单调递增
var hasIncreasingSubarrays = function (nums, k) {
    for (let i = 0; i < nums.length - 2 * k + 1; i++) {
        if (
            isIncreasingArray(nums.slice(i, i + k)) &&
            isIncreasingArray(nums.slice(i + k, i + 2 * k))
        )
            return true;
    }
    return false;
};

var isIncreasingArray = function (arr) {
    return arr.every((cur, idx, arr) => {
        if (idx === 0) return true;
        if (cur > arr[idx - 1]) return true;
        return false;
    });
}

test = function () {
    nums = [-3, -19, -8, -16], k = 2
    console.log(hasIncreasingSubarrays(nums, k));
}

test();