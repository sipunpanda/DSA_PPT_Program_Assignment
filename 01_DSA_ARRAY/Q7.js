// <aside>
// 💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// </aside>

function zerosInLast(nums) {
    let nonZeroIndex = 0;

    // Move all nonzero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros
    while (nonZeroIndex < nums.length) {
        nums[nonZeroIndex] = 0;
        nonZeroIndex++;
    }

    return nums;
}

let nums = [0, 1, 0, 3, 12];
console.log(zerosInLast(nums)); 
