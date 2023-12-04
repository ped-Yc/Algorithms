// https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/

// 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。

// 每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。

// 你的点数就是你拿到手中的所有卡牌的点数之和。

// 给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。

const cardPoints: number[] = [11, 49, 100, 20, 86, 29, 72];
let k = 4;

function maxScore(cardPoints: number[], k: number): number {
  // 思路：滑动窗口，从两边拿牌，剩下的就是中间连续的部分，中间的部分最小时拿到的牌最大。问题即转化成了求最小子序列的问题。
  // 一开始窗口为i=0,j=cardPoints.length-k,用min来记录此时的窗口总点数
  // 窗口右移，删除左边的元素，增加右边的元素，更新min
  // 直到窗口移动到最末端，更新最小的min值
  // res=sum-min
  let sum = 0, // 所有牌的总点数
    win = 0, // 窗口中牌的总点数
    res = 0, // 需要获得的最大点数
    left = 0,
    right = cardPoints.length - k;
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
