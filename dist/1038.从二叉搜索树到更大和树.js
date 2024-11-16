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
/**
 * @YCTODO
 * @Description 1038.从二叉搜索树到更大和树
 * @Author Ped-Yc
 * @Date 2023 - 12 - 12
 */
// function bstToGst(root: TreeNode | null): TreeNode | null {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAzOC7ku47kuozlj4nmkJzntKLmoJHliLDmm7TlpKflkozmoJEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMTAzOC7ku47kuozlj4nmkJzntKLmoJHliLDmm7TlpKflkozmoJEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtHQUErRztBQUUvRzs7R0FFRztBQUNILE1BQU0sUUFBUTtJQUlaLFlBQVksR0FBWSxFQUFFLElBQXNCLEVBQUUsS0FBdUI7UUFDdkUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbEQsQ0FBQztDQUNGO0FBRUQ7Ozs7O0dBS0c7QUFFSCwrREFBK0QifQ==