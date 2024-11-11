// Brute Force Solution
const twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // logic
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
// [3,2,4] => 3+2, 3+4, 2+4 => 7, 7, 6

// Using JS Objects

const twoSum = function (nums, target) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 26));

// nums = [2,7,11,15], target = 26
