// https://leetcode.cn/problems/climbing-stairs/?envType=daily-question&envId=2023-12-10

/**
 * @YCTODO
 * @Description 70.爬楼梯
 * @Author Ped-Yc
 * @Date 2023 - 12 - 10
 * @Thinking 动态规划，最后一次跨越台阶的方法有两种；状态转移方程：dp[n]=dp[n-1]+dp[n-2],dp[1]=1,dp[2]=2
 */

function climbStairs(n: number): number {
  if (n < 3) return n;
  let dp: number[] = new Array();
  dp[1] = 1;
  dp[2] = 2;
  // 最后一次跨越台阶的方法有两种
  // dp[n]=dp[n-1]+dp[n-2],dp[1]=1,dp[2]=2
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
