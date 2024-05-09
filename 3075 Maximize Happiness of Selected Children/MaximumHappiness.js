/**
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