// https://leetcode.cn/problems/longest-palindromic-substring/

/**
 * @YCTODO
 * @Description 05.最长回文字符串
 * @Author Ped-Yc
 * @Date 2023 - 12 - 10
 * @Thinking 动态规划，若存在子串s(i,j)是回文字符串,那么当s(i-1)==s(j+1)时s(i-1,j+1)也是回文字符串。dp[i][j]表示子串s(i,j)是否为回文字符串，状态转移方程：dp(i,j)=dp(i+1,j-1)&&s(i-1)==s(j+1)
 */
function longestPalindrome(s: string): string {
  let maxLen: number = 1;
  let begin: number = 0;
  let strArr: string[] = s.split("");
  // dp[i][j]表示下标i到j的子串是否为回文
  let dp: boolean[][] = new Array(s.length).fill(new Array(s.length));
  // 所有长度为1的子串都为回文
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j > i; j++) {
      if (i < 0 || j > s.length - 1) break;
      dp[i][j] = dp[i + 1][j - 1] && strArr[i] == strArr[j];

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
}

// function isPalindrome(s: string): boolean {
//   let strArr: string[] = s.split("");
//   if (strArr.reverse().join("") === s) {
//     return true;
//   }
//   return false;
// }

const s = "babad";
console.log(longestPalindrome(s));
