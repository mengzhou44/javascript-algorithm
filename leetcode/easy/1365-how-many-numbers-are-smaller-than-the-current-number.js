function smallerNumbersThanCurrent(nums) {
  if (nums.length === 1)  return [0]

  let temp = nums.slice(0, nums.length-1)
  let lastNumber = nums[nums.length-1]
  
  let result = smallerNumbersThanCurrent(temp)
  result.push(0)

  for(let i=0; i<result.length-1; i++) {
       if (nums[i]>lastNumber) {
           result[i]=result[i]+1
       } else if (nums[i]<lastNumber) {
           result[result.length-1] = result[result.length-1]+1
       }
  }

  return result 
};


function smallerNumbersThanCurrent(nums) {
  let result =[]
  for(let num of nums) {
      result.push(nums.filter(item=>item<num).length)
  }
  return result 
}

function smallerNumbersThanCurrent(nums) {
  let result = []
   for(let i=0; i<nums.length; i++) {
       let count = 0 
       for(let j=0; j<nums.length; j++) {
            if (nums[j]<nums[i]) {
                count++
            }
       }
       result.push(count)
   }
   return  result 
}



function smallerNumbersThanCurrent(nums) {
  let result = new Array(nums.length)
  result.fill(0)
  
  for(let i=0; i<nums.length-1; i++) {
      for(let j=i+1; j<nums.length; j++) {
          if (nums[i]>nums[j]) {
              result[i]++
          }else if (nums[i]<nums[j]) {
              result[j]++
          }
      }
  }
  
  return result 
  
}