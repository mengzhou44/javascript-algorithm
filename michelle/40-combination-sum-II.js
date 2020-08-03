/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b)
    let result = []

    helper(target, [], 0)

    return result

    function helper(target, tempList, index) {
        if (target < 0) return
        if (target === 0) {
            result.push([...tempList])
        } else {
            for (let i = index; i < candidates.length; i++) {
                tempList.push(candidates[i])
                helper(target - candidates[i], tempList, i + 1)
                tempList.pop()
                while (
                    i < candidates.length - 1 &&
                    candidates[i] === candidates[i + 1]
                ) {
                    i++
                }
            }
        }
    }
}
