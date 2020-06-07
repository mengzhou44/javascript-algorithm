// function isUgly(num) {
//     if (num <= 0) return false

//     if (num === 1) return true

//     if (num > Math.pow(2, 31) - 1) return false

//     while (num > 1) {
//         if (num % 2 === 0) {
//             num = num / 2
//         } else if (num % 3 === 0) {
//             num = num / 3
//         } else if (num % 5 === 0) {
//             num = num / 5
//         } else {
//             return false
//         }
//     }

//     return true
// }

function isUgly(num) {
    if (num <= 0) return false
    if (num === 1) return true
    if (num > Math.pow(2, 31) - 1) return false

    while (num > 1) {
        if (num % 2 === 0) {
            num = num / 2
        } else if (num % 3 === 0) {
            num = num / 3
        } else if (num % 5 === 0) {
            num = num / 5
        } else {
            return false
        }
    }
    return true
}


console.log(isUgly(6))