// function partitionList(nums,k) {
//       let index = 0
//       let count = 0 
//       while(count<nums.length) {
//          if (nums[index]>k) {
//              shiftArray(nums,index)
//          } else {
//               index++
//          }
//          count++
//       }
//       return  nums
// }

// function shiftArray(nums,index) {
//     let temp = nums[index]
//     for(let i=index; i<nums.length-1; i++) {
//        nums[i] = nums[i+1]
//     }
//     nums[nums.length-1] = temp
// }

 
function partitionList(nums,k) {
     let bound = nums.length-1 
     let count = 0 
     let index = 0 
     while(count<nums.length) {
       if (nums[index]>k) {
           swap(nums, index,bound)
           bound--
       } else {
         index++
       }
       count++
     }

     return nums

}

function swap(nums, i,j) {
    let temp =  nums[i]
    nums[i]  = nums[j]
    nums[j] = temp 
}


console.log(partitionList([7,1,6,1,2,9],3))
console.log(partitionList([2, 2, 2, 5, 2, 2, 2, 2, 5],3))
 