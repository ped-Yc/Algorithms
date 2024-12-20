"use strict";
// https://leetcode.cn/problems/longest-palindromic-substring/
/**
 * @YCTODO
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDUu5pyA6ZW/5Zue5paH5a2Q5LiyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjLzA1LuacgOmVv+WbnuaWh+WtkOS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOERBQThEO0FBRTlEOzs7Ozs7R0FNRztBQUNILFNBQVMsaUJBQWlCLENBQUMsQ0FBUztJQUNsQyxJQUFJLE1BQU0sR0FBVyxDQUFDLENBQUM7SUFDdkIsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksTUFBTSxHQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsMEJBQTBCO0lBQzFCLElBQUksRUFBRSxHQUFnQixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLGdCQUFnQjtJQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsTUFBTTtZQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0RCxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ1osQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVELDhDQUE4QztBQUM5Qyx3Q0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLG1CQUFtQjtBQUNuQixNQUFNO0FBQ04sa0JBQWtCO0FBQ2xCLElBQUk7QUFFSixNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIn0=