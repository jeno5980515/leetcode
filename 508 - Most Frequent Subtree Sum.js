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
var findFrequentTreeSum = function(root) {
    const map = {};
    
    const dfs = (node) => {
        if ( node === null ) return 0 ;
        let sum = 0;
        if ( node.left ){
            sum += dfs(node.left); 
        }
        if ( node.right ){
            sum += dfs(node.right);
        }
        let result = sum + node.val;
        map[result] = map[result] === undefined ? 1 : map[result] + 1 ;
        return result;
    }
    dfs(root);
    return Object.keys(map)
        .map((num) => {
            return { num, amount : map[num] } ; 
        })
        .sort((e1, e2) => e2.amount - e1.amount )
        .filter((el, index, arr) => el.amount === arr[0].amount )
        .map(el => parseInt(el.num))
};