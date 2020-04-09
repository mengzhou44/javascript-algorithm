function countSmaller(nums) {
    
  if (nums.length === 0)  return []
   if (nums.length === 1)  return [0]
  
  let result=[]
  for(let i=0; i<nums.length-1; i++) {
      let count = 0 
      for (let j=i+1; j<nums.length; j++) {
           if (nums[i]>nums[j]) {
               count++ 
           }
      }
      result.push(count)    
  }
  
  result.push(0)
  return result 
}
