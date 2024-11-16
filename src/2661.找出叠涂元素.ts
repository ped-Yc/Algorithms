// https://leetcode.cn/problems/first-completely-painted-row-or-column/?envType=daily-question&envId=2023-12-01

export {};
const arr: number[] = [1, 3, 4, 2];
const mat: number[][] = [
  [1, 4],
  [2, 3],
];


/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
function firstCompleteIndex(arr: number[], mat: number[][]) {
  // 利用flagMap记录涂色元素在矩阵中的位置
  // 利用rowArr,colArr记录行列上的涂色元素数量,若rowArr[i]=mat[0].length或colArr[j]=mat.length即行内元素全被涂满
  const m = mat[0].length;
  const n = mat.length;
  let flagMap = new Map();
  let rowArr = new Array(m).fill(0);
  let colArr = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      flagMap.set(mat[i][j], [i, j]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    // 如果某一行或某一列上都被涂色，返回i
    let flag = flagMap.get(arr[i]);
    rowArr[flag[0]]++;
    if (rowArr[flag[0]] == m) {
      return i;
    }
    colArr[flag[1]]++;
    if (colArr[flag[1]] == n) {
      return i;
    }
  }
  return -1;
}
let i = firstCompleteIndex(arr, mat);
console.log(i);
