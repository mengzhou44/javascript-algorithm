function subarraySum(nums, k) {
    let map = new Map()
    map.set(0, 1)
    let sum = 0
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        if (map.has(sum - k)) {
            result += map.get(sum - k)
        }

        if (!map.has(sum)) {
            map.set(sum, 1)
        } else {
            map.set(sum, map.get(sum) + 1)
        }
    }

    return result
}


function find_continuous_k(nums,k) {
    let presum= [0] 
    let sum = 0
    
    for (let i = 0; i < nums.length; i++) {
        sum = sum+ nums[i]
        let j= findIndex(presum, sum-k)
       
        if (j!==-1) {
            return nums.slice(j,i+1)
        }
        
        presum.push(sum)
    }
    
    return []
     
}


function findIndex(array, value) {
    console.log(array, value)
    for(let i =0; i<array.length; i++) {
        if (array[i] === value) {
            return i 
        }
    }
    return -1 
}


console.log(find_continuous_k([1, 3, 2, 5, 7, 2], 14))
