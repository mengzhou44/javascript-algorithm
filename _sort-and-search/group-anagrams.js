// function sortByAnagrams(array) {
//     let result = array.sort((a, b) => compareString(a, b))
//     return result
// }

// function compareString(a, b) {
//     let temp1 = a.split('')
//     let temp2 = b.split('')
//     return temp1.sort() > temp2.sort()
// }

function sortByAnagrams(array) {
    let map = {}
    for (let item of array) {
        const key = createKey(item)
        if (map[key] === undefined) {
            map[key] = [item]
        } else {
            map[key].push(item)
        }
    }
    let result = []
    for (let key of Object.keys(map)) {
        result.push(...map[key])
    }
    return result
}

function createKey(str) {
    return str.split('').sort()
}

const arr = ['2323', 'wers', 'w12ers', '8972', 'srew', '12wers']

console.log(sortByAnagrams(arr))
