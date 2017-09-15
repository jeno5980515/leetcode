/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right - 1){
        let mid = parseInt((right + left)/2);
        if ( mid % 2 === 0 ){
            nums[mid] === nums[mid+1] ? left = mid : right = mid;
        } else {
            nums[mid] === nums[mid+1] ? right = mid : left = mid;
        }
    }
    return left % 2 === 0 ? nums[left] : nums[right];
};
