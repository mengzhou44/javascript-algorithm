/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = []
  let unique = Array.from(new Set(nums));
  for(let i=1; i<=nums.length; i++ ) {
       if (unique.includes(i)=== false) {
            result.push(i)
       }
  }
 return result 
};