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
var findBottomLeftValue = function(root) {
    if ( !root ) return 0;
    let queue = [root];
    let result = 0;
    while( queue.length !== 0 ){
        let length = queue.length;
        for ( let i = 0; i < length; i ++ ){
            let node = queue.shift();
            if ( i === 0 ) result = node.val;
            if ( node.left ) queue.push(node.left);
            if ( node.right ) queue.push(node.right);
        }
    }
    return result;
};