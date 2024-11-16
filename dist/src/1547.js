/**
 * - 题目：1547. 切棍子的最小成本
 * - 题目地址：https://leetcode.cn/problems/minimum-cost-to-cut-a-stick/description/?envType=daily-question&envId=2024-11-11
 * - 标签：动态规划、二分查找、数组、前缀和、二分答案
 * - 难度：中等
 * - 状态: YCTODO
 */


/**
 * 思路一. 暴力破解
 * 枚举所有切割方案，计算成本，取最小值
 * 假设cuts数组长度为n，则共有n!种切割方案
 * 每次切割的时间复杂度为O(n^2)，总时间复杂度为O(n^2 * n!)
 * 铁定超时
**/


/**
 * 思路二. 二分法
 * ?假设每次都切割最长的棍子，每次切割点都距离棍子中心最近
 * 
**/