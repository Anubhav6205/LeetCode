
//  Definition for a binary tree node.
//   class TreeNode {
//      val: number
//       left: TreeNode | null
//       right: TreeNode | null
//       constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.left = (left===undefined ? null : left)
//           this.right = (right===undefined ? null : right)
//       }
//   }
 
function checkBST(root: TreeNode | null,ub: number, lb:number): boolean {
    if(!root) return true;
    if(root.val>=ub || root.val<=lb) return false;
    return checkBST(root.left,root.val,lb) && checkBST(root.right,ub,root.val);
}

function isValidBST(root: TreeNode | null): boolean {
    return checkBST(root,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
};