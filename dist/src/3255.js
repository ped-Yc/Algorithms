/**
 * - 题目：3255. 长度为 K 的子数组的能量值 II
 * - 题目地址：https://leetcode.cn/problems/find-the-power-of-k-size-subarrays-ii/description/?envType=daily-question&envId=2024-11-07
 * - 解题思路：枚举，遍历数组记录连续递增数组长度，当遇到非递增时，记录当前最大值，并重置连续递增数组长度
 * - 复杂度分析：reduce函数的时间复杂度是O(K)，循环n次，O(n*k)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
    let result = new Array(nums.length - k + 1).fill(-1);
    let cnt = 0;
    for (let i = 0; i < nums.length - k + 1; i++) {
        if (i == 0 || nums[i] == nums[i - 1] + 1) {
            cnt++;
        }
        else {
            cnt = 1;
        }
        if (cnt >= k) {
            result[i - k + 1] = nums[i];
        }
    }
    return result;
};

var test = function () {
    console.log(resultsArray([1, 2, 3, 4, 5], 3));
    console.log(resultsArray([1, 3, 4], 2));
    console.log(resultsArray([1, 2, 3, 4, 5], 1));
}

test();