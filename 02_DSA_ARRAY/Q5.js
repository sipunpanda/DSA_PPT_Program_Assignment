/* 
Q5 Given an integer array nums, find three numbers whose product is maximum and return the 
maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
*/

function maxProduct(nums) {
    let maxProduct = -1;
    for(let i = 0; i < nums.length-2; i++) {
        for(let j = i+1; j < nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                if(nums[i]*nums[j]*nums[k] > maxProduct) {
                    maxProduct = nums[i]*nums[j]*nums[k];
                }
            }
        }
    }
    return maxProduct
}

let arr = [1, 2, 3];

console.log(maxProduct(arr));
