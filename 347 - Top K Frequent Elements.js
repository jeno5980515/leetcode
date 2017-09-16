/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    nums.forEach(num => map[num] = map[num] === undefined ? 1 : map[num] + 1 );
    return Object.keys(map)
        .map(key => {
            return { key, amount: map[key] }
        })
        .sort((n1, n2) => n2.amount - n1.amount )
        .slice(0, k)
        .map(num => parseInt(num.key));
};