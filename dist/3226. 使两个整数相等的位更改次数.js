"use strict";
// https://leetcode.cn/problems/first-completely-painted-row-or-column/?envType=daily-question&envId=2023-12-01
// 3226. 使两个整数相等的位更改次数
function minChanges(nums1, nums2) {
    let num1 = nums1.toString(2);
    const n1 = num1.length;
    let num2 = nums2.toString(2);
    const n2 = num2.length;
    if (n1 - n2 > 0) {
        for (let i = 0; i < n1 - n2; i++) {
            num2 = "0" + num2;
        }
    }
    else {
        for (let i = 0; i < n2 - n1; i++) {
            num1 = "0" + num1;
        }
    }
    let res = 0;
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] !== num2[i]) {
            res++;
        }
    }
    return res == 0 ? res : -1;
}
minChanges(13, 4);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIyNi4g5L2/5Lik5Liq5pW05pWw55u4562J55qE5L2N5pu05pS55qyh5pWwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzMyMjYuIOS9v+S4pOS4quaVtOaVsOebuOetieeahOS9jeabtOaUueasoeaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0dBQStHO0FBRS9HLHNCQUFzQjtBQUN0QixTQUFTLFVBQVUsQ0FBQyxLQUFhLEVBQUUsS0FBYTtJQUM5QyxJQUFJLElBQUksR0FBVyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsSUFBSSxJQUFJLEdBQVcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDO1NBQU0sQ0FBQztRQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3hCLEdBQUcsRUFBRSxDQUFDO1FBQ1IsQ0FBQztJQUNILENBQUM7SUFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVELFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMifQ==