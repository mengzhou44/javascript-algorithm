
// Boyer moore vote 
function  majorityElement(nums) {
  let majority= nums[0]
  let count=0
  for(let num of nums) {
       if (num === majority) {
            count=count+1
           
       } else {
           count=count-1
           if (count === 0) {
              majority = num
              count=1
           }
       }
  } 
  return majority

}



***********

1. Hashtable 

function  majorityElement(nums) {
  let map = new Map()
  for(let num of nums) {
     let count =map.get(num)
     if (count=== undefined) {
        map.set(num,1)
     } else {
        map.set(num, count+1)
     }
      
     if (map.get(num) >= Math.ceil(nums.length/2)) {
        return num
     }
  }

  return -1 

}


2. sorting 

function  majorityElement(nums) {
  nums = nums.sort((a,b)=>a-b)
 return nums[Math.floor(nums.length/2)]
}


3. divide and conquer 

function  majorityElement(nums) {
  return helper(nums, 0, nums.length-1)
}


function helper(nums,l,r){
        if (l === r) return nums[l]
        let mid= Math.floor((l+r) /2)
        let ml = helper(nums,l,mid)
        let mr = helper(nums,mid+1,r)
        if (ml === mr)  return ml
        
        if (count(ml,nums, l,mid)>count(mr,nums,mid+1, r)) {
            return ml
        }
         return mr
}

function count(target, nums, left, right) {
   let count = 0 
   for(let i=left; i<=right; i++) {
        if (nums[i] === target) {
            count++
        }
   }
  return count 
}
  


