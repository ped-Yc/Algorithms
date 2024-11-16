// 思路：预处理，以一个8位数组DIRS记录元素偏移量：[[-1,0],[1,0].[0,-1].[0,1],[1,1],[-1,1],[-1,-1],[1,-1]]
// 元素(i,j)的上位元素可以表示为：(i+dirs[0],j)
// 构建一个数组sumArr存放求和结果

/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
    this.grid = grid;
    let n = grid.length;
    let sumArr = new Array(n * n)[2];
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [1, 1], [-1, 1], [-1, -1], [1, -1]];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            el = grid[i][j];
            for (let k = 0; k < 8; k++) {
                x = i + dirs[k][0];
                y = j + dirs[k][1];
            }
            if (0 <= x && x < n && 0 <= y && y < n) {
                sumArr[el][k / 4] += grid[x][y];
            }
        }
    }
    return sumArr;
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
    return sumArr[value][0];
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
    return sumArr[value][1];
};

/** 
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */