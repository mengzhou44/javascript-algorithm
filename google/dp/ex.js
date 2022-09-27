function longestNonDecreasing(nums) {
     let n = nums.length 
     let dp= new Array(n).fill(1)   // dp[i] srtands for 0-i longest non-decreasing 

     for(let i=1; i<n; i++) {
         for(let j=0; j<i; j++) {
              if (nums[i]>=nums[j] && dp[i] < dp[j] +1) {
                  dp[i] = dp[j] +1 
              }
         }
     }
     console.log(dp)

     return dp[n-1]
}

console.log(longestNonDecreasing([-1,3,4,5,2,2,2,2]))