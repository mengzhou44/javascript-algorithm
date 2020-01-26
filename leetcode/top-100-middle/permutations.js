// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function(nums) {
//   if (nums.length === 1) {
//        return [nums];
//   }
//   if (nums.length === 2) {
//        return [
//                  [nums[0], nums[1]],
//                  [nums[1], nums[0]]
//            ]
//   }
  
//   let result =[]
//   const temp = permute(nums.slice(1))
  
//   for(let arr of temp) {
//       console.log(arr)
//       for(i=0; i<nums.length; i++) {
//           let newArray= [] 
//           if (i === 0) {
//               newArray=[nums[0], ...arr]
//           } else {
//                newArray = [...arr.slice(0,i), nums[0], ...arr.slice(i)]
//            }
//            result.push(newArray)
//       }
//   }
  
//   return result; 
// };


var permute = function(nums) {
     if (nums.length === 1) {
         return [nums]
     }
    
     let result = []
     for(let num of nums) {
        let newNums= nums.filter(item=> item!=num)
        let temp = permute(newNums)
        for(let item of temp) {
             result.push([num, ...item])
        }
     }
    
     return result; 
};