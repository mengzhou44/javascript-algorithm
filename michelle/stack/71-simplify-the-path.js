// function simplifyPath(path) {
//     let temp = path.split('/')
//     temp.map(item => (item = item.replace('/', '')))

//     temp = temp.filter(item => item !== '.' && item !== '')

//     let array = []
//     for (i = 0; i < temp.length; i++) {
//         if (temp[i] === '..') {
//             if (array.length > 0) {
//                 array.pop()
//             }
//         } else {
//             array.push(temp[i])
//         }
//     }

//     return '/' + array.join('/')
// }

function simplifyPath(path) {
    let temp = path.split('/')

    let result = []
    for (i = 0; i < temp.length; i++) {
        if (temp[i] === '..') {
            if (result.length > 0) {
                result.pop()
            }
        } else if (temp[i] === '.' || temp[i] === '') {
            continue
        } else {
            result.push(temp[i])
        }
    }

    return '/' + result.join('/')
}
