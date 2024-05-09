/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    var sum = 0;
    for(var i = 0; i < k; i++){
        console.log(happiness)
        var index = findMaxIndex(happiness)
        sum += happiness[index];
        happiness.splice(index, 1);
        for(var j = 0; j < happiness.length; j++){
            if(happiness[j] > 0) happiness[j]--;
        }
    }

    return sum
};

function findMaxIndex(array){
    var max = 0;
    var index = 0;
    for(var ele in array){
        if (array[ele] > max) {
            max = array[ele]
            index = ele
        };
    }

    return index;
}

const input = [2,98,45];
const k = 1

console.log(maximumHappinessSum(input, k))