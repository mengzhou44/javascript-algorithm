// var majorityElement = function(nums) {
 
//   nums = nums.sort();
  
//   let midPoint= Math.floor(nums.length /2)
//   return nums[midPoint];
// };
 
var majorityElement = function(nums) {
 
  let map={};

  for(let i=0; i<nums.length; i++) {
     let key = nums[i].toString()
     if (map[key]=== undefined) {    
         map[key]= 1; 
     }else {
         map[key]= map[key]+1;
     }
        
     if (map[key] >  Math.floor(nums.length /2)) {
         return nums[i];
     }
   
  }

  return -1
};
