function reverseBits(n) {
    let temp = n.toString(2).split('').reverse()

    while (temp.length < 32) {
        temp.push(0)
    }

    return parseInt(temp.join(''), 2)
}

function reverseBits(n) {
    let index = 31
    let result = 0
    while (n > 0) {
        if (n % 2 !== 0) result += Math.pow(2, index)
        index--
        n = Math.floor(n / 2)
    }
    return result
}

// function reverseBits(n) {
//   let  digits = toBinaryDigits(n)
//   digits.reverse()
//   while(digits.length<32) {
//        digits.push(0)
//   }
//   return getNumber(digits)
// }

// function getNumber(digits) {
//    let result = 0
//    while(digits.length>0) {
//        let digit = digits.shift()
//        result += digit *Math.pow(2, digits.length)
//    }
//    return result
// }

// function toBinaryDigits(n) {
//    let digits= []
//    while(n>0) {
//        digits.unshift(n%2)
//        n= Math.floor(n/2)
//    }
//    return digits
// }

function reverseBits(n) {
    let digits = toBinaryDigits(n)
    digits.reverse()
    while (digits.length < 32) {
        digits.push(0)
    }
    return getNumber(digits)
}

function getNumber(digits) {
    let result = 0
    while (digits.length > 0) {
        let digit = digits.shift()
        result += result << (1 + digit)
    }
    return result
}

function toBinaryDigits(n) {
    let digits = []
    while (n > 0) {
        digits.push(n & 1)
        n = n >> 1
    }
    return digits
}

function toBinaryDigits(n) {
    let digits = []
    while (n > 0) {
        digits.unshift(n % 2)
        n = Math.floor(n / 2)
    }
    return digits
}
