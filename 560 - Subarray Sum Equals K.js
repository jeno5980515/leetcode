/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = { 0 : 1 };
    let sum = 0;
    let count = 0;
    nums.forEach((num) => {
        sum += num;
        if ( map[sum-k] ) {
            count += map[sum-k];
        }
        map[sum] = map[sum] === undefined ? 1 : map[sum] + 1; 
    })
    return count;
};