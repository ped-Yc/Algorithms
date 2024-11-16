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

function carPooling(trips: number[][], capacity: number): boolean {
  // 新建一个current记录当前空座位数,当座位数小于0时返回false
  // 新建一个stop数组记录站点人数
  // 给trips通过to的值从大到小排序
  // 新建一个map记录上下车的乘客数
  // 新建一个fromArr、toArr记录上下车地点
  let cur = capacity;
  let stopArr = new Array(1000).fill(0);
  trips.sort((a, b) => b[1] - a[1]);
  let fromArr,
    toArr = new Map();
  for (let i = 0; i < trips.length; i++) {
    // fromArr.set(trips[i][1], trips[i][0]);
    toArr.set(trips[i][2], trips[i][0]);
    if (cur < 0) return false;
  }
  return false;
}

carPooling(trips, capacity);
