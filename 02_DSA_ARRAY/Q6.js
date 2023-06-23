/*
Q 6
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4
*/

function findTargetIndex(nums, target) {
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        let k = Math.floor((i + j) / 2);

        if (target === nums[k]) {
            return k;
        } else if (target < nums[k]) {
            j = k - 1;
        } else {
            i = k + 1;
        }
    }

    return -1;
}

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

console.log(findTargetIndex(nums, target)); // Output: 4
