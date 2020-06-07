class ListFastSum {
    constructor(nums) {
        this.cache = this.createCache(nums)
    }

    createCache(nums) {
        let cache = new Map()
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
            cache.set(i+1, sum)
        }
        return cache
    }

    sum(start, end) {
        return this.cache.get(end) - this.cache.get(start)
    }
}
let temp = new ListFastSum([1,2,3,4,5,6,7])
console.log(temp.sum(2,5))
