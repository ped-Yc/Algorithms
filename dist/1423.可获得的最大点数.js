"use strict";
// https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/
const cardPoints = [11, 49, 100, 20, 86, 29, 72];
let k = 4;
function maxScore(cardPoints, k) {
    // 思路：滑动窗口，从两边拿牌，剩下的就是中间连续的部分，中间的部分最小时拿到的牌最大。问题即转化成了求最小子序列的问题。
    // 一开始窗口为i=0,j=cardPoints.length-k,用min来记录此时的窗口总点数
    // 窗口右移，删除左边的元素，增加右边的元素，更新min
    // 直到窗口移动到最末端，更新最小的min值
    // res=sum-min
    let sum = 0, // 所有牌的总点数
    win = 0, // 窗口中牌的总点数
    res = 0, // 需要获得的最大点数
    left = 0, right = cardPoints.length - k;
    for (let i = 0; i < cardPoints.length; i++) {
        sum += cardPoints[i];
    }
    for (let i = left; i < right; i++) {
        win += cardPoints[i];
    }
    let min = win;
    while (k > 0) {
        win = win - cardPoints[left] + cardPoints[right];
        min = Math.min(min, win);
        k--;
        left++;
        right++;
    }
    res = sum - min;
    return res;
}
console.log(maxScore(cardPoints, k));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQyMy7lj6/ojrflvpfnmoTmnIDlpKfngrnmlbAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMTQyMy7lj6/ojrflvpfnmoTmnIDlpKfngrnmlbAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlFQUF5RTtBQUV6RSxNQUFNLFVBQVUsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVWLFNBQVMsUUFBUSxDQUFDLFVBQW9CLEVBQUUsQ0FBUztJQUMvQyw4REFBOEQ7SUFDOUQsa0RBQWtEO0lBQ2xELDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxVQUFVO0lBQ3JCLEdBQUcsR0FBRyxDQUFDLEVBQUUsV0FBVztJQUNwQixHQUFHLEdBQUcsQ0FBQyxFQUFFLFlBQVk7SUFDckIsSUFBSSxHQUFHLENBQUMsRUFDUixLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMzQyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbEMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDYixHQUFHLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFDRCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNoQixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9