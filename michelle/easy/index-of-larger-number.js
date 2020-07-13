function largerNumbers(nums){
    if (nums.length === 1)   return -1 
   let result = [] 
   for(let i=0; i<nums.length-1; i++) {
         let temp = -1 
         for(let j=i+1; j<nums.length; j++) {
             if (nums[j]>nums[i]) {
                  temp = j
                  break
             }
         }
         result.push(temp)
        
    }   

    result.push(-1)
    return result 
} 

console.log(largerNumbers([3, 2, 5, 6, 9, 8]))