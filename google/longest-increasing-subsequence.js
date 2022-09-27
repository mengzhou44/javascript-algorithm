var lengthOfLIS = function (nums) {
  let n = nums.length;

  let lst = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && lst[i] < lst[j] + 1) {
        lst[i] = lst[j] + 1;
      }
    }
  }

  return Math.max(...lst);
};
