function compareVersion(version1, version2) {
    let array1 = version1.split('.')
    let array2 = version2.split('.')

    let maxSize = Math.max(array1.length, array2.length)
    for (let i = 0; i < maxSize; i++) {
        let temp1 = getValueAt(array1, i)

        let temp2 = getValueAt(array2, i)

        if (temp1 > temp2) return 1
        if (temp1 < temp2) return -1
    }

    return 0
}

function getValueAt(array, index) {
    if (index > array.length - 1) {
        return 0
    }
    return parseInt(array[index])
}
