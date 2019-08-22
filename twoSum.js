let twoSum = function(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    if (obj[remaining] !== undefined) {
      return [obj[remaining], i];
    } else {
      obj[nums[i]] = i;
    }
  }

  return [];
};
