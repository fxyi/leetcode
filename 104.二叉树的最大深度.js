/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var depth = 0;
    return maxDepthRecur(root, depth)
};

var maxDepthRecur = function(root, depth) {
    while (root != null) {
        var left = maxDepthRecur(root.left)
        var right = maxDepthRecur(root.right)
        return (left >= right ? left : right) + depth
    }
    return depth
}