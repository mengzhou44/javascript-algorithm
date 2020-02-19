// Hi, here's your problem today. This problem was recently asked by Google:

// Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

// Example 1:
// Input: [3, 3, 2, 1, 3, 2, 1]
// Output: [1, 1, 2, 2, 3, 3, 3]


function sort(nums) {
    let min = Number.MAX_VALUE
    let max = Number.MIN_VALUE
    for (let i=0; i< nums.length; i++) {
          if (nums[i]>max) {
              max= nums[i]
          }
          if (nums[i]<min) {
               min = nums[i] 
         }
    }
     
    const minInfo = {value: min, count:0 }
    const maxInfo = {value: max, count:0 }
    const midInfo = {count: 0}
 
    for (let i=0; i< nums.length; i++) {
      if (nums[i] ===max ) {
           maxInfo.count++
      }
      else if (nums[i] ===min) {
        minInfo.count++
      } else {
          if (midInfo.value === undefined) {
               midInfo.value =nums[i]
          }
          midInfo.count++
      }
    }
    
    return [
         ...createArray(minInfo),
         ...createArray(midInfo),
         ...createArray(maxInfo),
     ]
}

function createArray({value, count}) {
   let arr= []
   for(let i=0; i<count;i++) {
       arr.push(value)
   }

   return  arr
}


// function sort(nums) {
//     if (nums.length === 1) return nums; 
//     let map={}

//      for(let i=0; i<nums.length; i++) {
//          if (map[nums[i]] === undefined) {
//              map[nums[i]] = 1
//          }
//          else {
//               map[nums[i]] =  map[nums[i]]+1
//          }
//      }
     
//      const sortedKeys = Object.keys(map).map(key=> parseInt(key)).sort();
//      console.log(sortedKeys)
//      console.log(map)
//      let result=[]
//      for(let key of sortedKeys) {
//           for(let i=0; i< map[key]; i++) {
//              result.push(key)
//           } 
//      }

//      return result
//   }
     


  console.log(sort([3, 3, 2, 1, 3, 2, 1]))