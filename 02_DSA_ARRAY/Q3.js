/* 
Question 3
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some 
or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].
*/

function findLHS(nums) {
    let numFreq = new Map();
    let maxLength = 0;

    // Count the frequency of each number
    for (let num of nums) {
        if (numFreq.has(num)) {
            numFreq.set(num, numFreq.get(num) + 1);
        } else {
            numFreq.set(num, 1);
        }
    }

    // Check for pairs with frequency difference of 1
    for (let [num, freq] of numFreq) {
        if (numFreq.has(num + 1)) {
            let subsequenceLength = freq + numFreq.get(num + 1);
            maxLength = Math.max(maxLength, subsequenceLength);
        }
    }

    return maxLength;
}

let nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums)); 
