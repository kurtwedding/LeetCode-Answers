#include <stdbool.h>
#include <stdio.h>

int findMaxK(int* nums, int numsSize) {
    int max = -1;
    for (int i = 0; i < numsSize; i++){ // First iteration
        bool hasNegative = false;
        for (int j = 0; j < numsSize; j++){ // Second iteration
            if(nums[j] == -nums[i]) {
                hasNegative = true;
                break;
            };
        }
        if(hasNegative && nums[i] > max) max = nums[i];
    }
    return max;
}

int main(int argc, char** argv){

    int input[4] = {-1,2,-3,3};

    printf("%d", findMaxK(input, 4));

}