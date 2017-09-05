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
var largestValues = function(root) {
    if ( !root ) return [];
    let queue = [root];
    let result = [];
    while( queue.length !== 0 ){
        let length = queue.length;
        let max = queue[0].val;
        for ( let i = 0; i < length; i ++ ){
            let node = queue.shift();
            if ( node.val > max ) max = node.val;
            if ( node.left ) queue.push(node.left);
            if ( node.right ) queue.push(node.right);
        }
        result.push(max);
    }
    return result;
};