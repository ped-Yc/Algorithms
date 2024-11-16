"use strict";
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
var twoSum1 = function (nums, target) {
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
var twoSum2 = function (nums, target) {
    const map = new Map();
    for (let [index, num] of nums.entries()) {
        if (map.has(target - num)) {
            return [map.get(target - num), index];
        }
        map.set(num, index);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDEu5Lik5pWw5LmL5ZKMLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjLzAxLuS4pOaVsOS5i+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUg7OztHQUdHO0FBQ0gsSUFBSSxPQUFPLEdBQUcsVUFBVSxJQUFjLEVBQUUsTUFBYztJQUNwRCxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNuQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDSCxJQUFJLE9BQU8sR0FBRyxVQUFVLElBQWMsRUFBRSxNQUFjO0lBQ3BELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdEIsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDLENBQUMifQ==