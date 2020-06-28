function canPartitionKSubsets(nums, k) {
    if (nums.length === 0) return false
    if (k === 1) return true

    let sum = nums.reduce((sum, item) => sum + item)
    if (sum % k !== 0) return false
    let target = sum / k
    let visited = new Array(nums.length).fill(false)
    return dfs(k, 0, 0, visited)

    function dfs(k, current, index, visited) {
        if (k === 0) return true

        if (current === target) {
            return dfs(k - 1, 0, 0, visited)
        }
        if (current > target) return false

        for (let i = index; i < nums.length; i++) {
            if (visited[i] === false) {
                visited[i] = true
                current = current + nums[i]
                if (dfs(k, current, (i + 1) % nums.length, visited)) {
                    return true
                }
                visited[i] = false
                current = current - nums[i]
            }
        }

        return false
    }
}
