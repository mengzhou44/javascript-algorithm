class NumArray {
  constructor(nums){
      this.nums = nums 
      this.prevSum = [] 
      let sum = 0
      for(let num of nums) {
          sum +=num
          this.prevSum.push(sum)
      }
  }
  
  sumRange(i,j) {
      if (i===0) {
          return this.prevSum[j] 
      }
      return  this.prevSum[j] - this.prevSum[i-1]
  }
}


let array = new NumArray([-2, 0, 3, -5, 2, -1])

console.log(array.sumRange(0,2))
console.log(array.sumRange(2,5))
console.log(array.sumRange(0,5))