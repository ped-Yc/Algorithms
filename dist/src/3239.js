/**
 * - 题目：3239. 最少翻转次数使二进制矩阵回文 I
 * - 题目地址：https://leetcode.cn/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/?envType=daily-question&envId=2024-11-15
 * - 状态: YCDONE
**/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
    const m = grid.length, n = grid[0].length;
    const cnt = [0, 0];//记录行和列反转的次数
    // 行反转
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n / 2; j++) {
            if (grid[i][j] !== grid[i][n - j - 1]) {
                cnt[0]++;
            }
        }
    }
    // 列反转
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m / 2; i++) {
            if (grid[i][j] !== grid[m - i - 1][j]) {
                cnt[1]++;
            }
        }
    }
    return Math.min(cnt[0], cnt[1]);
};