/**
 * 3075. Maximize Happiness of Selected Children
 * 
 * You are given an array happiness of length n, and a positive integer k.
 * 
 * There are n children standing in a queue, where the ith child has happiness value happiness[i]. 
 * You want to select k children from these n children in k turns.
 * 
 * In each turn, when you select a child, the happiness value of all the children that have not been selected till now decreases by 1. 
 * Note that the happiness value cannot become negative and gets decremented only if it is positive.
 * 
 * Return the maximum sum of the happiness values of the selected children you can achieve by selecting k children.
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((i, j) => j - i) // sort in descending order
    var sum = 0;

    // now sum all the values in the array from left to right, decreasing each element by 1 each time 
    for(var i = 0; i < k; i++) {
        if(happiness[i] < 1) break; // if all the remaining elements are 0 or lower, break
        sum += Math.max(0, happiness[i] - i); // making sure the value can never go negative
    }

    return sum;
};

const input = [12,1,42];
const k = 3

console.log(maximumHappinessSum(input, k))