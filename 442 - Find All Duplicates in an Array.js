/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    nums.forEach((num, index) => {
        const number = Math.abs(num);
        if ( nums[number - 1] < 0 ) {
            result.push(number);
        } else {
            nums[number - 1] *= -1 ;
        }
    })
    return result;
};