"use strict";
// https://leetcode.cn/problems/climbing-stairs/?envType=daily-question&envId=2023-12-10
/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAu54is5qW85qKvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vNzAu54is5qW85qKvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3RkFBd0Y7QUFFeEY7Ozs7O0dBS0c7QUFFSCxTQUFTLFdBQVcsQ0FBQyxDQUFTO0lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQixJQUFJLEVBQUUsR0FBYSxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyJ9