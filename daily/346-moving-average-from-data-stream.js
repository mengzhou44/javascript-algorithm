function movingAverage(nums) {
     
      let sum = 0
      let result = []
      for(let i = 0; i<nums.length ; i++) {
          sum +=nums[i]
          let temp= Math.floor(sum /(i+1))
          result.push(temp)
      }
      return result 
}

let array = [2, 1, 4, 7, 2, 0, 5]
console.log(movingAverage(array)) 

//2 1.5 2 3.0 2 2.0 2