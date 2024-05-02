/**
 * 2441. Largest Positive Integer That Exists With Its Negative
 * 
 * Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
 * 
 * Return the positive integer k. If there is no such integer, return -1.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let max = -1;
    for(let i in nums){
        if(nums[i] > max && nums.includes(-nums[i])) max = nums[i];
    }

    return max;
};

let input = [-1,2,-3,3]

console.log(findMaxK(input))