/**
 * 165. Compare Version Numbers
 * 
 * Given two version numbers, version1 and version2, compare them.
 * 
 * Version numbers consist of one or more revisions joined by a dot '.'.
 * Each revision consists of digits and may contain leading zeros.
 * Every revision contains at least one character. 
 * Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. 
 * For example 2.5.33 and 0.1 are valid version numbers.
 * 
 * To compare version numbers, compare their revisions in left-to-right order. 
 * Revisions are compared using their integer value ignoring any leading zeros. 
 * This means that revisions 1 and 001 are considered equal. 
 * If a version number does not specify a revision at an index, then treat the revision as 0. 
 * For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.
 * 
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1Parsed = version1.split('.'), v2Parsed = version2.split('.');

    for(var i = 0; i < Math.min(v1Parsed.length, v2Parsed.length); i++) {
        if(parseInt(v1Parsed[i]) > parseInt(v2Parsed[i]) ){ // if the v1 section is larger
            return 1;
        } else if(parseInt(v1Parsed[i]) < parseInt(v2Parsed[i])){ // if the v2 section is larger
            return -1;
        }
    }

    // This section will run if the versions are the same as far as the shortest version (I hope this makes sense)
    if(v1Parsed.length > v2Parsed.length) {
        for(var i = v2Parsed.length; i < v1Parsed.length; i++){ // for all the version sections after the shared sections
            if(v1Parsed[i] > 0) return 1;
        }
    } else if(v2Parsed.length > v1Parsed.length) {
        for(var i = v1Parsed.length; i < v2Parsed.length; i++){ // for all the version sections after the shared sections
            if(v2Parsed[i] > 0) return -1;
        }
    }
    
    return 0;
};

var input = ["1.0", "1"]

console.log(compareVersion(input[0], input[1]))