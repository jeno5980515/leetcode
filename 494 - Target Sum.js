/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  const sum = nums.reduce((cal, val) => { 
    return cal + val
  }, 0);
  if ( S > sum || (S + sum) % 2 !== 0 ){
    return 0;
  }
  const target = parseInt(( sum + S ) / 2);
  const dp = Array(target+1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i ++){
    for (let j = target; j >= nums[i]; j --){
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
};