/**
 * 2373. Largest Local Values in a Matrix
 * 
 * You are given an n x n integer matrix grid.
 * 
 * Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
 * 
 * maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
 * In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
 * 
 * Return the generated matrix.
 * 
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    var n = grid.length;
    var answer = Array();
    for (var i = 1; i < n-1; i++) { //Secondly, go top to bottom
        var localAnswer = Array();
        for (var j = 1; j < n-1; j++) { // Firstly go left to right

            localAnswer.push(Math.max(
                grid[i-1][j-1], grid[i-1][j], grid[i-1][j+1],
                grid[i][j-1],   grid[i][j],   grid[i][j+1],
                grid[i+1][j-1], grid[i+1][j], grid[i+1][j+1]))
        }
        answer.push(localAnswer);
    }
    return answer;
    
};

var grid = [
    [9,9,8,1],
    [5,6,2,6],
    [8,2,6,4],
    [6,2,2,2]
]

console.log(largestLocal(grid));