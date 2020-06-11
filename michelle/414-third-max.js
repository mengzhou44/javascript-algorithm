function thirdMax(nums) {
    nums = nums.sort((a, b) => b - a)
    let temp = [nums[0]]
    while (nums.length > 0) {
        let item = nums.shift()
        if (item < temp[temp.length - 1]) {
            temp.push(item)
        }
    }

    if (temp.length < 3) return temp[0]

    return temp[2]
}
>>>>>>>>>>

function  thirdMax(nums) {

    let temp =[]
    for(let i=0; i<nums.length; i++) {
           addToArray(temp,nums[i])
    }
    
    if (temp.length === 3)  return temp[2]
    return temp[0]
}

function addToArray(array, value){
      if (array.includes(value)) return
      array.push(value)
      array.sort((a,b)=> b-a)
      if (array.length>3) {
          array.pop()
      }
}


function  thirdMax(nums) {
    let set = new Set()
    for(let num of nums){
        set.add(num)
    }
    let array= Array.from(set).sort((a,b)=> b-a)
    if (array.length>=3) {
        return array[2]
    } 
    return array[0] 

}