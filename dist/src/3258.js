/**
 * - 题目：3258. 统计满足 K 约束的子字符串数量 I
 * - 题目地址：https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-i/description/https://leetcode.cn/problems/find-the-power-of-k-size-subarrays-ii/description/?envType=daily-question&envId=2024-11-07
 * - 题目状态：YCDONE
 */

/**O
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 思路一：暴力，枚举所有子字符串的开始位置，向右遍历，判断是否满足约束k，
// 外层循环控制开始位置，内层循环控制结束位置，s[j]表示遍历到的数组的结束位置
// 时间复杂度O(n^2)，空间复杂度O(1)
var countKConstraintSubstrings2 = function (s, k) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        const count = [0, 0];//count[0]记录当前子字符串中0的数量，count[1]记录1的数量
        for (let j = i; j < s.length; j++) {
            count[parseInt(s[j], 10)]++;//第j位元素只可能是('0','1')，转化成下标(0,1)，录入count数组
            if (count[0] > k && count[1] > k) {
                break;
            }
            res++;
        }
    }
    return res;
};

// 思路二：滑动窗口，
// https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-i/solutions/2884495/on-hua-dong-chuang-kou-pythonjavacgo-by-keubv
// 时间复杂度O(n)，空间复杂度O(1)
var countKConstraintSubstrings = function (s, k) {
    let ans = left = 0;
    const cnt = [0, 0];
    for (let i = 0; i < s.length; i++) {
        cnt[s[i] - '0']++;
        while (cnt[0] > k && cnt[1] > k) {
            // 左端点右移一位，对应cnt--
            cnt[s[left] - '0']--;
            left++;
        }
        ans += i - left + 1;
    }
    return ans;
};