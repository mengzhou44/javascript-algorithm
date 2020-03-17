var majorityElement = function(nums) {
    let map = new Map()
    let size = nums.length

    for (let num of nums) {
        let count = map.get(num)
        if (count === undefined) {
            count = 1
        } else {
            count++
        }
        map.set(num, count)

        if (count >= Math.floor(size / 2) + 1) {
            return num
        }
    }

    return -1
}


function  majorityElement(nums) {
  let index =0
  let count = 1

  for (let i=1; i<nums.length; i++) {
       if (nums[i] === nums[index]) {
          count++
       } else {
           count-- 
           if (count === 0 ) {
              index= i
              count=1
           }
       }
  }
  return nums[index]
}