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
