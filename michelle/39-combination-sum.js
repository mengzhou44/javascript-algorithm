function combinationSum(candidates, target) {
    candidates.sort((a, b) => a - b)
    let result = []

    helper(target, [], 0)

    return result

    function helper(target, tempList, index = 0) {
        if (target < 0) return

        if (target === 0) {
            result.push([...tempList])
            
            return
        }

        for (let i = index; i < candidates.length; i++) {
            tempList.push(candidates[i])
            helper(target - candidates[i], tempList, i)
            tempList.pop()
        }
    }
}
