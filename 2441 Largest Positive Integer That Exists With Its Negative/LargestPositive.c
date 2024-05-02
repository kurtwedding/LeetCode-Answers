#include <stdbool.h>
#include <stdio.h>

int findMaxK(int* nums, int numsSize) {
    int max = -1;
    for (int i = 0; i < numsSize; i++){ // First iteration
        bool hasNegative = false;
        if(nums[i] > max){ // only check if the negative exists in the array if the value is larger than the current max
            for (int j = 0; j < numsSize; j++){ // Second iteration
                if(nums[j] == -nums[i]) { 
                    max = nums[i];
                    break; // Can break out once the negative of it is found
                };
            }
        }
    }
    return max;
}

int main(int argc, char** argv){

    int input[4] = {-1,2,-3,3};

    printf("%d", findMaxK(input, 4));

}