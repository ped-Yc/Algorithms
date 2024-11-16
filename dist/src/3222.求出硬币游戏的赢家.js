/**
 * - 题目：3222.求出硬币游戏的赢家
 * - 题目地址：https://leetcode.cn/problems/find-the-winning-player-in-coin-game/description/?envType=daily-question&envId=2024-11-05
 * - 解题思路：判断奇偶性，每一轮拿走的硬币数量是固定的1枚x 、4枚y，所以判断轮数的奇偶性即可
 * - 复杂度分析：
 *      - 时间复杂度：O(1)
 *      - 空间复杂度：O(1)
 * - 评论区额外解：https://leetcode.cn/problems/find-the-winning-player-in-coin-game/solutions/2851440/o1-shu-xue-zuo-fa-pythonjavacgo-by-endle-427f/comments/2416672
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function (x, y) {
    let flag = 0;//记录轮数
    while (x - 1 >= 0 && y - 4 >= 0) {
        x = x - 1;
        y = y - 4;
        flag++;
    }
    if (flag == 0) return 'Bob';
    if (flag == 1) return 'Alice';
    return flag % 2 == 0 ? "Bob" : "Alice";
};

// ! 优化算法
var losingPlayer1 = function (x, y) {
    return Math.min(x, Math.floor(y / 4)) % 2 == 0 ? "Bob" : "Alice"
}

var test = function () {
    let x = 2, y = 7;
    console.log(losingPlayer(x, y));
}

test();