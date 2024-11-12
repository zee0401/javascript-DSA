// With JS Methods
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    // O(n)
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); // O(1)
      i--;
    }
  }

  return nums.length;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
// console.log(removeDuplicates([1, 1, 2]));
