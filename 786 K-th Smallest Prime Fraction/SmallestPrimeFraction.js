/**
 * 786. K-th Smallest Prime Fraction
 * 
 * You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. 
 * You are also given an integer k.
 * 
 * For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].
 * 
 * Return the kth smallest fraction considered. 
 * Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].
 * 
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    var fractions = new Array();
    for(var i = 0; i < arr.length; i++) {

        for (var j = i+1; j < arr.length; j++) {
            fractions.push([arr[i], arr[j]]);
        }
    }

    fractions.sort(compare2DArray)

    return fractions[k-1];
};

function compare2DArray(a, b) {
    if(a[0]/a[1] < b[0]/b[1]) return -1;
    else if(a[0]/a[1] == b[0]/b[1]) return 0;
    return 1;
}

var input = [1, 2, 3, 5];
var k = 3;

console.log(kthSmallestPrimeFraction(input, k));