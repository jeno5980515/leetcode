/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if ( !root ) return [];
    
    let stack = [];
    let result = [];
    let node = root;
    
    while( stack.length !== 0 || node !== null ){
        if ( !node ){
            node = stack.pop();
        }
        result.push(node.val);
        if ( node.right ){
            stack.push(node.right);
        }
        node = node.left;
    }
    return result;
};