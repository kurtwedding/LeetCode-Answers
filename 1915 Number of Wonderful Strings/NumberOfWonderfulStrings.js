/**
 * 1915. Number of Worderful Substrings
 * 
 * A wonderful string is a string where at most one letter appears an odd number of times.
 * 
 * For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
 * Given a string word that consists of the first ten lowercase English letters ('a' through 'j'), return the number of wonderful non-empty substrings in word. 
 * If the same substring appears multiple times in word, then count each occurrence separately.
 * 
 * A substring is a contiguous sequence of characters in a string.
 * 
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    var results = new Array();
    for (var i = 0; i < word.length; i++) {
        results.push(word.charAt(i));
        var temp = word[i];
        for(var j = i + 1; j < word.length; j++) { // testing all words to be created from the rest of the letters after the current one
            temp += word.charAt(j);
            var tempJSON = new Object();

            // Testing here if there is more than one unique character appearing an odd number of times
            for(var x = 0; x < temp.length; x++) {
                if(tempJSON[temp.charAt(x)] == null) tempJSON[temp.charAt(x)] = 1;
                else tempJSON[temp.charAt(x)]++;
            }

            // Now tempJSON carries how many times each character appears in the temp string
            var oddCount = 0;
            Object.keys(tempJSON).forEach(key => { // Finding how many odd appearances of characters there are in the string
                if(tempJSON[key] % 2 != 0) oddCount++;
            }) 

            if(oddCount > 1) continue; // dont add to results
            else results.push(temp); // add to results
        }
    }
    return results.length;
};

var input = "aba";

console.log(wonderfulSubstrings(input))