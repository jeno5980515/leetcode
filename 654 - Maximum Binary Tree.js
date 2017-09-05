/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  
    const build = (left, right) => {
        if ( left > right ) return null;
      
        let max = -1, maxIndex = left;
        for ( let i = left; i <= right ; i ++ ){
            if ( nums[i] > max ){
                max = nums[i];
                maxIndex = i;
            }
        }
        
        const node = new TreeNode(nums[maxIndex]);
        node.left = build(left, maxIndex-1);
        node.right = build(maxIndex+1, right);
        return node;
    }
    return build(0, nums.length - 1);
};