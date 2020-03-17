function  singleNumber(nums) {
  if (nums.length === 1)  return nums[0]
   
  let result = nums.pop()
   while(nums.length>0) {
       result= result ^ nums.pop()
   }
   return result 
};