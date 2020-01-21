// function hasPairWith(array, sum) {
//   array = array.sort();
//   while (array.length > 1) {
//     if (array[0] + array[array.length - 1] === sum) {
//       return true;
//     } else if (array[0] + array[array.length - 1] > sum) {
//       array.pop();
//     } else {
//       array.shift();
//     }
//   }
//   return false;
// }

// console.log(hasPairWith([2,5,6,9], 16))

var twoSum = function(nums, target) {
  let  startPos = 0;
  let endPos = nums.length - 1;
  while (endPos - startPos > 0) {
    const sum = nums[startPos] + nums[endPos];
    if (sum === target) {
      return [startPos, endPos];
    } else if (sum > target) {
      endPos--;
    } else {
      startPos++;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
