class NumArray {
  constructor(nums) {
   this.nums = nums
  }
  
  sumRange(i, j) {
    let result = 0
    for(let k=i; k<=j; k++) {
          result += this.nums[k]
    }
    return result 
  }
}
 

let array = new NumArray([-2, 0, 3, -5, 2, -1])

console.log(array.sumRange(0,2))
console.log(array.sumRange(2,5))
console.log(array.sumRange(0,5))