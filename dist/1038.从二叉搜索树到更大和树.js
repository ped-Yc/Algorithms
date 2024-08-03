"use strict";
// https://leetcode.cn/problems/binary-search-tree-to-greater-sum-tree/?envType=daily-question&envId=2023-12-01
/**
 * Definition for a binary tree node.
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
// function bstToGst(root: TreeNode | null): TreeNode | null {
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAzOC7ku47kuozlj4nmkJzntKLmoJHliLDmm7TlpKflkozmoJEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8xMDM4LuS7juS6jOWPieaQnOe0ouagkeWIsOabtOWkp+WSjOagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0dBQStHO0FBRS9HOztHQUVHO0FBQ0gsTUFBTSxRQUFRO0lBSVosWUFBWSxHQUFZLEVBQUUsSUFBc0IsRUFBRSxLQUF1QjtRQUN2RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7QUFFRCw4REFBOEQ7QUFFOUQsS0FBSyJ9