/**
 * Definition for a binary tree node. 
 * **/
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

function levelOrder(root: TreeNode | null): number[][] {
    let mp = new Map<number,number[]>;

    function currentLevel(node: TreeNode | null, level: number)
    {
        if(node===null) return;
        if(!mp.get(level)) mp.set(level,[]);
        mp.get(level)!.push(node.val);
        currentLevel(node.left,level+1);
        currentLevel(node.right,level+1);
    }

    currentLevel(root,0);

    return Array.from(mp.values());
};