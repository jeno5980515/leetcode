/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    return nums.reduce((result, num) => {
        const number = Math.abs(num);
        nums[number - 1] < 0 ? result.push(number) : nums[number - 1] *= -1 ;
        return result;
    }, []);
};