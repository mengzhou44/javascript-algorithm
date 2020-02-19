// Hi, here's your problem today. This problem was recently asked by AirBNB:

// Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

// Example:
// Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
// Output: [6,8]

// Input: A = [100, 150, 150, 153], target = 150
// Output: [1,2]

// Input: A = [1,2,3,4,5,6,10], target = 9
// Output: [-1, -1]

function findIndices(nums, target) {
 
  let startIndex=-1
  let count = 0; 
  for (i=0; i<nums.length; i++) {
       
        if (nums[i]=== target) {
           if (startIndex===-1) {
              startIndex =i
           }
           count++
        }
        else  if (nums[i]> target) {
           break;
        }

  }
  if (startIndex === -1) {
     return [-1,-1]
  }
   return [startIndex, startIndex+count-1]
}

let indices = findIndices( [1,2,3,4,5,6,10],  9)
console.log(indices);