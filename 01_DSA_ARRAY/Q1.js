// 💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][


let num2 = [2, 7, 1, 15, 3, 4, 5, -2, 6, 8, 0, 9, 11]

let target2 = 9;

num2.sort((a, b) => a - b);
let left = 0;

let right = num2.length - 1;

while (right > left) {
    let sum = num2[left] + num2[right]

    if (sum === target2) {
        console.log([left, right])

        left++;

        right--;
    }

    else if (sum > target2) {
        right--;

    } else {

        left++;

    }
}
