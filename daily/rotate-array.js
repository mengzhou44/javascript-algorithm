function rotateList(nums, k) {
    k = k % nums.length
   for(let i=0; i<k; i++) {
      rotate(nums)
   }
   
}


function rotate(nums) {
     let left = nums.shift()
     nums.push(left)
}