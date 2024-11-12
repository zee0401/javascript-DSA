// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// Brute Force Approach
function rotateArray(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }

  const rotated = nums.splice(size - k, size); // [5, 6, 7]
  nums.unshift(...rotated);

  return nums;
}

// Time Complexity - O(n)
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
