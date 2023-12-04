"use strict";
// https://leetcode.cn/problems/car-pooling/?envType=daily-question&envId=2023-12-01
const capacity = 4;
const trips = [
    [2, 1, 5],
    [3, 3, 7],
];
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
    // 新建一个current记录当前空座位数,当座位数小于0时返回false
    // 新建一个stop数组记录站点人数
    // 给trips通过to的值从大到小排序
    // 新建一个map记录上下车的乘客数
    // 新建一个fromArr、toArr记录上下车地点
    let cur = capacity;
    let stopArr = new Array(1000).fill(0);
    trips.sort((a, b) => b[1] - a[1]);
    let fromArr, toArr = new Map();
    for (let i = 0; i < trips.length; i++) {
        // fromArr.set(trips[i][1], trips[i][0]);
        toArr.set(trips[i][2], trips[i][0]);
        if (cur < 0)
            return false;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA5NC7mi7zovaYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8xMDk0LuaLvOi9pi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0ZBQW9GO0FBRXBGLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNuQixNQUFNLEtBQUssR0FBRztJQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxTQUFTLFVBQVUsQ0FBQyxLQUFpQixFQUFFLFFBQWdCO0lBQ3JELHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQ25CLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksT0FBTyxFQUNULEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdEMseUNBQXlDO1FBQ3pDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksR0FBRyxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIn0=