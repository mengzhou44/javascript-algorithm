 

//Given a sorted list of positive numbers, find the smallest positive number that cannot be a sum of any subset in the list.


function findSmallest(nums){
  let sum =1 
  for(let i =0;i<nums.length; i++) {
      if (nums[i]<= sum) {
          sum = sum+ nums[i]
      }
  }
  return sum 
}


console.log(findSmallest([1,1,1]))