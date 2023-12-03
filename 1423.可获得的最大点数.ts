// https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/

// 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。

// 每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。

// 你的点数就是你拿到手中的所有卡牌的点数之和。

// 给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。

const cardPoints: number[] = [1, 2, 3, 4, 5, 6, 1];
const k = 3;

function maxScore(cardPoints: number[], k: number): number {
  // 滑动窗口求解，一开始窗口大小为全部卡牌，选择大的一边减少窗口大小
  let res = 0;
  for (let i = 0, j = cardPoints.length - 1; (k = 0); k--) {
    let max = Math.max(cardPoints[i], cardPoints[j]);
    res += max;
    cardPoints[i] - cardPoints[j] > 0 ? i++ : j--;
  }
  return res;
}

console.log(maxScore(cardPoints, k)
);
