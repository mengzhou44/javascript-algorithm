
function findMinMax(nums){
   let min = nums[0]
   let max = nums[0]
   
   for(let i=1; i<nums.length; i++) {
       if (max<nums[i]) {
           max = nums[i]
       }
       if (min>nums[i]) {
          min = nums[i]
       }
   }

    return [min,max]

}


console.log(findMinMax([3, 5, 1, 2, 4, 8]))