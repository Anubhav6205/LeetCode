
  //Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
 }
 

function maxDepth(root: TreeNode | null): number {
    return findMax(root);
};

function findMax(root: TreeNode | null): number {
    if(root === null)
    {
        return 0;
    }
    return Math.max(findMax(root.left),findMax(root.right))+1;
}