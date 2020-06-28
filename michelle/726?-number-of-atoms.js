/**
 * @param {string} formula
 * @return {string}
 */
function countOfAtoms(formula) {
    let cur = {}
    let stack = []
    let i = 0
    let previousElement = null
    while (i <= formula.length) {
        if (formula[i] === '(') {
            stack.push({ ...cur })
            cur = {}
            previousElement = null
            i++
        } else if (formula[i] === ')') {
            let temp = cur
            cur = stack.pop()
            const { quantity, index } = findQuantity(formula, i + 1)

            for (let key of Object.keys(temp)) {
                if (cur[key] === undefined) {
                    cur[key] = 0
                }
                cur[key] = cur[key] + temp[key] * quantity
            }
            i = index
        } else if (!isDigit(formula[i])) {
            const { element, index } = findElement(formula, i)

            if (cur[element] === undefined) {
                cur[element] = 0
            }
            previousElement = element
            i = index
        } else {
            const { quantity, index } = findQuantity(formula, i)
            if (i === 2) {
                console.log(quantity, index)
            }
            i = index
            cur[previousElement] += quantity
            previousElement = null
        }
    }

    let result = ''
    let keys = Array.from(Object.keys(cur)).sort()

    for (let key of keys) {
        let quantity = cur[key]
        if (quantity === 1) {
            result += key
        } else {
            result += key + cur[key]
        }
    }

    return result
}

function findElement(formula, i) {
    let current = i
    let element = ''
    while (current < formula.length) {
        if (!isChar(formula[current])) {
            break
        } else if (current > i) {
            if (formula[current].toUpperCase() === formula[current]) {
                break
            }
        }
        element += formula[current]
        current++
    }
    return {
        element,
        index: current,
    }
}

function isChar(c) {
    if (isDigit(c)) return false
    if (c === '(' || c === ')') return false
    return true
}

function findQuantity(formula, i) {
    if (i === formula.length) {
        return {
            quantity: 1,
            index: i + 1,
        }
    }
    let current = i
    if (!isDigit(formula[current])) {
        return {
            quantity: 1,
            index: current,
        }
    }

    let quantity = 0
    while (current < formula.length && isDigit(formula[current])) {
        quantity = 10 * quantity + parseInt(formula[current])
        current++
    }
    return {
        quantity,
        index: current,
    }
}

function isDigit(c) {
    return '0123456789'.includes(c)
}
