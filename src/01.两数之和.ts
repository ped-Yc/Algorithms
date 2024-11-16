/**
 * @URL https://leetcode.cn/problems/two-sum/description/?envType=company&envId=bytedance&favoriteSlug=bytedance-thirty-days
 * @Description 01.两数之和
 * @Author Ped-Yc
 * @Date 2024-10-28
 * @Status YCDONE
 */

/**
 * 解法一：暴力解法
 * 时间复杂度：O(n^2)
 */
var twoSum1 = function (nums: number[], target: number) {
  for (let [index, num] of nums.entries()) {
    if (nums.indexOf(target - num) > 0) {
      return [index, nums.indexOf(target - num)];
    }
  }
};

/**
 * 解法二：哈希表解法
 * 时间复杂度：O(n)
 */
var twoSum2 = function (nums: number[], target: number) {
  const map = new Map();
  for (let [index, num] of nums.entries()) {
    if (map.has(target - num)) {
      return [map.get(target - num), index];
    }
    map.set(num, index);
  }
};
