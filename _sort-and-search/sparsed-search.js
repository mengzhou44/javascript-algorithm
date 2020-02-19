function sparsedSearch(array, value, start = 0, end = -1) {
    if (end === -1) {
        end = array.length - 1
    }

    let middle = Math.floor((start + end) / 2)

    if (array[middle] === '') {
        let left = middle - 1
        let right = middle + 1

        while (true) {
            if (left < start || right > end) {
               
                return -1
            }
            if (array[left] !== '') {
                middle = left
                break
            } else if (array[right] !== '') {
                middle = right
                break
            }
            left--
            right++
        }
    }
   
    if (array[middle] > value) {
        return sparsedSearch(array, value, start, middle - 1)
    } else if (array[middle] < value) {
        return sparsedSearch(array, value, middle + 1, end)
    }
    return middle
}

let array = [
    '',
    'abc',
    '',
    'bee',
    '',
    'dark',
    '',
    '',
    '',
    'digital',
    '',
    '',
    '',
    '',
    'eye',
    'frank'
]

console.log(sparsedSearch(array, 'digital'))
