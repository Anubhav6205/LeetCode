//Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function maxDepth(root) {
    return findMax(root);
}
;
function findMax(root) {
    if (root === null) {
        return 0;
    }
    return Math.max(findMax(root.left), findMax(root.right)) + 1;
}
//# sourceMappingURL=104.js.map