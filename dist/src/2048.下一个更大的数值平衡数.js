"use strict";
function nextBeautifulNumber(n) {
    // 思路：题目约束n<=10^6，创建7位数内的所有平衡数数组，找出大于n的平衡数即可
    // 数值平衡数和数位的关系：
    // 数位1：1
    // 数位2：22
    // 数位3：333、122、221
    // 数位4：4444、1333、3331
    // 数位5：55555、14444、44441
    // 可以看出
    // 1.数位上的数字不会大于最大数位;
    // 2.数位为n的最大平衡数为nnn...，最小平衡数为1(n-1)(n-1)...
    // 存放平衡数的数组
    let bfnArr = new Array(100).fill(0);
    for (let digital = 1; digital < 8; digital++) {
        // 平衡数的数组形式
        let bfn = new Array(10).fill(0);
        bfn[digital];
    }
    for (let i = n + 1; i < 55555; i++) { }
    return 1;
}
nextBeautifulNumber(100);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA0OC7kuIvkuIDkuKrmm7TlpKfnmoTmlbDlgLzlubPooaHmlbAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvMjA0OC7kuIvkuIDkuKrmm7TlpKfnmoTmlbDlgLzlubPooaHmlbAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsbUJBQW1CLENBQUMsQ0FBUztJQUNwQyw0Q0FBNEM7SUFFNUMsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsT0FBTztJQUNQLG9CQUFvQjtJQUNwQiwyQ0FBMkM7SUFFM0MsV0FBVztJQUNYLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxLQUFLLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDN0MsV0FBVztRQUNYLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUM7SUFDdEMsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMifQ==