function eval(expression) {
    if (expression.includes('(') === false) {
        return calculate(expression)
    }
    let startIndex = -1
    let endIndex = -1
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            startIndex = i
        } else if (expression[i] === ')') {
            endIndex = i
            let temp = expression.slice(startIndex + 1, endIndex)

            const newExpression =
                expression.slice(0, startIndex) +
                calculate(temp) +
                expression.slice(endIndex + 1)
            return eval(newExpression)
        }
    }
}

function calculate(expression) {
    if (expression.startsWith('-')) {
        expression = 0 + expression
    }

    let stack = expression.split('')
    while (stack.length > 1) {
        let left = ''
        let right = ''
        while (stack[0] !== '-' && stack[0] !== '+') {
            if (typeof stack[0] === 'number') {
                left = stack.shift()
            } else {
                left = parseInt(left + stack.shift())
            }
        }

        let operator = stack.shift()

        while (stack.length > 0 && stack[0] !== '-' && stack[0] !== '+') {
            right = parseInt(right + stack.shift())
        }

        if (operator === '-') {
            stack.unshift(left - right)
        } else {
            stack.unshift(left + right)
        }
    }
    return stack[0]
}

let result = eval('-(3+3)+((2-1)+9+1)')
console.log(result)
