// 💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5

// Output: 2



function findTarget(nums, target) {

  let minIndex = 0;

  let maxIndex = nums.length - 1;

  while (minIndex <= maxIndex) {
    let midIndex = Math.round((minIndex + maxIndex) / 2);
    if (nums[midIndex] < target) {
      minIndex = midIndex + 1;
    }
    else if (nums[midIndex] > target) {
       maxIndex = midIndex - 1; 
      }
    else {

      return midIndex;

    }
  }
  return -1;
}
const output = findTarget([1, 3, 5, 6], 5); 
console.log(output);
