function canPartitionKSubsets(nums, k) {
    if (k === 0) return false
    let sum = 0
    for (let num of nums) {
        sum += num
    }

    if (sum % k !== 0) {
        return false
    }

    let visited = new Array(nums.length)

    for (i = 0; i < visited.length; i++) {
        visited[i] = false
    }

    return dfs(nums, k, sum / k, 0, 0, visited)
}

function dfs(nums, k, target, sum, index, visited) {
    if (k === 0) {
        return true
    }

    if (sum > target) return false

    if (sum === target) {
        return dfs(nums, k - 1, target, 0, 0, visited)
    }

    for (let i = index; i < nums.length; i++) {
        if (!visited[i]) {
            sum = sum + nums[i]
            visited[i] = true
            if (dfs(nums, k, target, sum, i + 1, visited)) {
                return true
            }
            sum = sum - nums[i]
            visited[i] = false
        }
    }

    return false
}
