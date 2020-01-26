/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (nums.length === 0 || nums.length === 1 ) {
       return 0; 
  }
  
  let sorted = [...nums].sort((a,b)=> a-b)

  let startIndex= -1;
  for(i=0; i< nums.length;i++) {
       if (nums[i] !== sorted[i]) {
           startIndex = i;
           break;
       }
  }
 
  if (startIndex === -1) {
      return 0
  }
  
  let endIndex= -1;
  for(i=nums.length-1; i>=0;i--) {
       if (nums[i] !== sorted[i]) {
           endIndex = i;
           break;
       }
  }
  
 
  return endIndex- startIndex +1
};