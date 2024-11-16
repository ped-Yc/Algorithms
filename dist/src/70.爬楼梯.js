"use strict";
// https://leetcode.cn/problems/climbing-stairs/?envType=daily-question&envId=2023-12-10
/**
 * @YCTODO
 * @Description 70.爬楼梯
 * @Author Ped-Yc
 * @Date 2023 - 12 - 10
 * @Thinking 动态规划，最后一次跨越台阶的方法有两种；状态转移方程：dp[n]=dp[n-1]+dp[n-2],dp[1]=1,dp[2]=2
 */
function climbStairs(n) {
    if (n < 3)
        return n;
    let dp = new Array();
    dp[1] = 1;
    dp[2] = 2;
    // 最后一次跨越台阶的方法有两种
    // dp[n]=dp[n-1]+dp[n-2],dp[1]=1,dp[2]=2
    for (let i = 3; i < n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAu54is5qW85qKvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjLzcwLueIrOalvOairy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0ZBQXdGO0FBRXhGOzs7Ozs7R0FNRztBQUVILFNBQVMsV0FBVyxDQUFDLENBQVM7SUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLElBQUksRUFBRSxHQUFhLElBQUksS0FBSyxFQUFFLENBQUM7SUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixDQUFDIn0=