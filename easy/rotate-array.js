var rotate = function (nums, k) {
  k = k % nums.length;
  reverse(0, nums.length - 1);

  reverse(0, k - 1);

  reverse(k, nums.length - 1);

  function reverse(left, right) {
    while (left < right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }
};
