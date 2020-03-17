// function findPeakElement(nums) {

//   for (let i = 1; i < nums.length-1; i++) {
//       let prev = nums[i - 1]
//       let next = nums[i + 1]
//       let cur = nums[i]
//       if (cur > prev && cur > next) {
//           return i
//       }
//   }

//   if (nums[nums.length - 1] >= nums[0]) {
//       return nums.length - 1
//   }

//   return 0
// }


function findPeakElement(nums) {
     let left = 0
     let right = nums.length-1 
     while(left<right){
        let mid = Math.floor((left+right)/2)
        if  (nums[mid]<nums[mid+1]) {
            left = mid +1
        }else {
            right = mid
        }
     }

     return left 
}
