// https://leetcode.cn/problems/binary-search-tree-to-greater-sum-tree/?envType=daily-question&envId=2023-12-01

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
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
