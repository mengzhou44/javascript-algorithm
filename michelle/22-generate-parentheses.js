function generateParenthesis(n) {
    let result = []

    backtrack('', 0, 0)

    return result

    function backtrack(current, open, close) {
        if (current.length === n * 2) {
            result.push(current)
            return
        }

        if (open < n) {
            backtrack(current + '(', open + 1, close)
        }

        if (open > close) {
            backtrack(current + ')', open, close + 1)
        }
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    let result = []
    helper('', 0, 0)

    return result

    function helper(current, open, close) {
        if (current.length === 2 * n) {
            result.push(current)
        }

        if (close > open) return

        if (open < n) {
            helper(current + '(', open + 1, close)
        }

        if (close < n) {
            helper(current + ')', open, close + 1)
        }
    }
}
