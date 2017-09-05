/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if ( !root ) return [];
    let queue = [root];
    let levels = [];
    while( queue.length !== 0 ){
        let length = queue.length;
        levels.push([]);
        for ( let i = 0; i < length; i ++ ){
            let node = queue.shift();
            levels[levels.length-1].push(node.val);
            if ( node.left ) queue.push(node.left);
            if ( node.right ) queue.push(node.right);
        }
    }
    return levels;
};