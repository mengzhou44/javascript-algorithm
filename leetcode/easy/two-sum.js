var twoSum = function(nums, target) {
  let map= {};
  
  for(let i=0; i<nums.length; i++) {
           
      let  difference = target- nums[i]

      if (map[difference]!== undefined)   {
           return [i, map[difference]]
      } else {
           map[nums[i]] = i;
      }
  }
  
  
  return []
};


console.log(twoSum([3,2,4],6))