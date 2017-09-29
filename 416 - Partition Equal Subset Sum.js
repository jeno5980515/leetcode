/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((cal, val) => {
        return cal+val;
    }, 0);
    
    if ( sum % 2 === 1 ) return false; 
    const target = sum / 2 ;
    
    let dp = Array(target + 1).fill(false);
    dp[0] = true;
    
    for ( let i = 0 ; i < nums.length ; i ++ ){
        for ( let j = target ; j >= nums[i] ; j -- ){
            dp[j] = dp[j] || dp[j-nums[i]];
        }
    }
    
    return dp[target];
};