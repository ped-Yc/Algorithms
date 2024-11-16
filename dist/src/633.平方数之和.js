/**
 * - 题目：633.平方数之和
 * - 题目地址：https://leetcode.cn/problems/sum-of-square-numbers/?envType=daily-question&envId=2024-11-04
 * - 解题思路：双指针
 *      - 找到一个值 x 使得：x^2 < c, (x+1)^2 > c
 *      - 得到[1, x]
 * - 复杂度分析：O(n)
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let left = 0, right = Math.floor(Math.sqrt(c));
    while (left <= right) {
        let sum = left * left + right * right;
        if (sum == c) {
            return true;
        } else if (sum < c) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

function test() {
    let c = 5;
    console.log(judgeSquareSum(c));
}

test();