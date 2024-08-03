"use strict";
// https://leetcode.cn/problems/longest-palindromic-substring/
/**
 * @Description 05.最长回文字符串
 * @Author Ped-Yc
 * @Date 2023 - 12 - 10
 * @Thinking 动态规划，若存在子串s(i,j)是回文字符串,那么当s(i-1)==s(j+1)时s(i-1,j+1)也是回文字符串。dp[i][j]表示子串s(i,j)是否为回文字符串，状态转移方程：dp(i,j)=dp(i+1,j-1)&&s(i-1)==s(j+1)
 */
function longestPalindrome(s) {
    let maxLen = 1;
    let begin = 0;
    let strArr = s.split("");
    // dp[i][j]表示下标i到j的子串是否为回文
    let dp = new Array(s.length).fill(new Array(s.length));
    // 所有长度为1的子串都为回文
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j > i; j++) {
            if (i < 0 || j > s.length - 1)
                break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDUu5pyA6ZW/5Zue5paH5a2Q5LiyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vMDUu5pyA6ZW/5Zue5paH5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4REFBOEQ7QUFFOUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGlCQUFpQixDQUFDLENBQVM7SUFDbEMsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQztJQUN0QixJQUFJLE1BQU0sR0FBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLDBCQUEwQjtJQUMxQixJQUFJLEVBQUUsR0FBZ0IsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRSxnQkFBZ0I7SUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE1BQU07WUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEQsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNaLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFRCw4Q0FBOEM7QUFDOUMsd0NBQXdDO0FBQ3hDLDJDQUEyQztBQUMzQyxtQkFBbUI7QUFDbkIsTUFBTTtBQUNOLGtCQUFrQjtBQUNsQixJQUFJO0FBRUosTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9