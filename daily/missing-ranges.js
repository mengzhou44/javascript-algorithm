// Given a sorted list of numbers, and two integers low and high representing the lower and upper bound of a range, return a list of (inclusive) ranges where the numbers are missing. A range should be represented by a tuple in the format of (lower, upper).

// Here's an example and some starting code:

// def missing_ranges(nums, low, high):
//   # Fill this in.
  

function missingRanges(nums, low, high) {
   let start 
   let ranges = [] 
   for(i=low; i<high; i++)  {
        if (!nums.includes(i) && start === undefined){
           start =i
        }  else if (nums.includes(i) && start!== undefined) {
           ranges.push([start, i-1])
           start = undefined
        }  
    }
    ranges.push([start, i-1])
    return ranges 
}

console.log(missingRanges([1, 3, 5, 10], 1, 10))