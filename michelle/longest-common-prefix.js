// function longestCommonPrefix(strs) {
//     if (strs.length === 0) {
//         return ''
//     }
//     if (strs.length === 1) {
//         return strs[0]
//     }

//     let temp = strs.slice(1)
//     let prefix1 = longestCommonPrefix(temp)

//     return findPrefix(strs[0], prefix1)
// }

// function findPrefix(str1, str2) {
//     if (str1 === '' || str2 === '') return ''
//     let prefix = ''
//     while (str1.length > 0) {
//         if (str1[0] === str2[0]) {
//             prefix += str1[0]
//             str1 = str1.substring(1)
//             str2 = str2.substring(1)
//         } else {
//             break
//         }
//     }
//     return prefix
// }

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ''
    let index = 0
    while (index < strs[0].length) {
        let temp = strs[0][index]
        for (let str of strs) {
            if (str[index] !== temp) {
                return strs[0].substring(0, index)
            }
        }
        index++
    }

    return strs[0]
}
