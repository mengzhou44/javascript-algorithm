function  singleNumber(nums) {
  if (nums.length === 1)  return nums[0]
  let result = nums[0] 
  for(let i=1; i<nums.length; i++) {
      result = result ^nums[i]
  }
 
  return result 
};

function  singleNumber(nums) {
  let  array = [] 
  for(let num of nums) {
      if (array.includes(num)) {
          array = array.filter(item=> item !=num)
      }else {
          array.push(num)
      }
  }
   return array[0] 
};

function  singleNumber(nums) {
    let result = 0 
    for(let num of nums) {
        result ^=num
    }
    return result
}