function reversePolishNotation(exp) {
    if (exp.length === 1) {
        return parseInt(exp)
    }
    let index = 0
    while (true) {
        if (
            isNumber(exp[index]) &&
            isNumber(exp[index + 1]) &&
            '+-*/'.includes(exp[index + 2])
        ) {
            exp = calculateNewExp(exp, index)
            return reversePolishNotation(exp)
        }
        index++
    }
}

function calculateNewExp(exp, i) {
    let num1 = exp[i]
    let num2 = exp[i + 1]
    let result
    if (exp[i + 2] === '+') {
        result = num1 + num2
    } else if (exp[i + 2] === '-') {
        result = num1 - num2
    } else if (exp[i + 2] === '*') {
        result = num1 * num2
    } else if (exp[i + 2] === '/') {
        result = num1 / num2
    }
    return [...exp.slice(0, i), result, ...exp.slice(i + 3)]
}

function isNumber(value) {
    return typeof value === 'number'
}

console.log(reversePolishNotation([1, 2, 3, '+', 2, '*', '-']))
