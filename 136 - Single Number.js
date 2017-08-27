/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var number = nums[0] ;
    for ( var i = 1 ; i < nums.length ; i ++ ){
        number ^= nums[i] ;
    }
    return number ;
};