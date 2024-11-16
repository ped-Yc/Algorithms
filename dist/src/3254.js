/**
 * - 题目：3254. 长度为 K 的子数组的能量值 I
 * - 题目地址：https://leetcode.cn/problems/find-the-power-of-k-size-subarrays-i/description/?envType=daily-question&envId=2024-11-06
 * - 解题思路：枚举，模拟
 * - 复杂度分析：reduce函数的时间复杂度是O(K)，循环n次，O(n*k)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
    let result = new Array(nums.length - k + 1).fill(0);
    for (let i = 0; i < nums.length - k + 1; i++) {
        let flag = true;// 判断是否上升
        let flag1 = true;// 判断是否连续
        result[i] = nums.slice(i, i + k).reduce((acc, cur) => {
            if (acc >= cur) {
                flag = false;
            }
            if (acc + 1 != cur) {
                flag1 = false;
            }
            return cur;
        });
        result[i] = (flag && flag1) ? result[i] : -1;
    }
    return result;
};

var test = function () {
    console.log(resultsArray([1, 2, 3, 4, 5], 3));
    console.log(resultsArray([1, 3, 4], 2));
    console.log(resultsArray([1, 2, 3, 4, 5], 1));
}

test();