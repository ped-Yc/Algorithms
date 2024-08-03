/**
 * @Description Write something
 * @Author Ped-Yc
 * @Date 2023 - 12 - 11
 * @link https://leetcode.cn/problems/path-with-minimum-effort/?envType=daily-question&envId=2023-12-11
 * @link https://leetcode.cn/problems/path-with-minimum-effort/solutions/581494/duo-tu-xiang-xi-fen-xi-jie-ti-si-lu-fen-7z89x/?envType=daily-question&envId=2023-12-11
 * @Thinking 动态规划，要走到[i,j]必须先走到
 * 左[i-1,j]
 * 下[i,j+1]
 * 右[i+1,j]
 * 上[i,j-1]
 * dp[i][j]表示走到[i,j]的最小体力消耗
 * 状态转移方程：dp[i][j]=min(左下右上)
 */

function minimumEffortPath(heights: number[][]): number {
  let rows = heights[0].length;
  let cols = heights.length;
  let dp: number[][] = new Array(rows).fill(new Array(cols).fill(10 ** 6));
  let ef = 10 ** 6;

  if (rows == 1) {
    for (let i = 1; i < cols; i++) {
      ef = Math.min(ef, Math.abs(heights[0][i] - heights[0][i - 1]));
    }
    return ef;
  }

  if (cols == 1) {
    for (let i = 1; i < rows; i++) {
      ef = Math.min(ef, Math.abs(heights[i][0] - heights[i - 1][0]));
    }
    return ef;
  }

  dp[0][0] = 0;
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j],
        dp[i][j + 1],
        dp[i + 1][j],
        dp[i][j - 1]
      );
    }
  }

  console.log(dp);

  return ef;
}

const heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];
minimumEffortPath(heights);
