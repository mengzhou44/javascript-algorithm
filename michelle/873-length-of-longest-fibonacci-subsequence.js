function lenLongestFibSubseq(nums) {
  let result = 0
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          let a = nums[i]
          let b = nums[j]
          let count = 2
          while (nums.includes(a + b)) {
              let temp = a
              a = b
              b = temp + a
              count++
          }
          result = Math.max(result, count)
      }
  }
  if (result <= 2) return 0

  return result
}
