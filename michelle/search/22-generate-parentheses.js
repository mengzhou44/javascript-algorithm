function generateParenthesis(n) {
    let res = []
    helper(res, '', n, n)
    return res
}

function helper(result, item, left, right) {
    if (left > right) return

    if (left === 0 && right === 0) result.push(item)

    if (left > 0) {
        helper(result, item + '(', left - 1, right)
    }

    if (right > 0) {
        helper(result, item + ')', left, right - 1)
    }
}

let result = generateParenthesis(3)
console.log(result)
