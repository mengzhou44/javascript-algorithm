function bubbleSort(array) {
    if (array.length === 0 || array.length === 1) return array

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

function selectionSort(array) {
    if (array.length === 0 || array.length === 1) return array

    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j
            }
        }
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }

    return array
}

function mergeSort(array) {
    if (array.length === 1) return array
    let middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArray, rightArray) {
    let result = []
    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift())
        } else {
            result.push(rightArray.shift())
        }
    }
    if (leftArray.length > 0) {
        result.push(...leftArray)
    }
    if (rightArray.length > 0) {
        result.push(...rightArray)
    }

    return result
}

function quickSort(array, start = 0, end = -1) {
    if (end === -1) {
        end = array.length - 1
    }
    if (start < end) {
        const pivot = partion(array, start, end)
        quickSort(array, (start = 0), pivot - 1)
        quickSort(array, pivot + 1, end)
    }
    return array
}

function partion(array, start, end) {
    let pivot = end

    let i = start - 1
    let j = start

    while (j < pivot) {
        if (array[j] > array[pivot]) {
            j++
        } else {
            i++
            swap(array, i, j)
            j++
        }
    }
    swap(array, i + 1, pivot)
    return i + 1
}

function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

function radixSort(arr) {
    const maxNum = Math.max(...arr) * 10

    let divisor = 10

    while (divisor < maxNum) {
        let buckets = [...Array(10)].map(() => [])

        for (let num of arr) {
            buckets[getDigitAt(num, divisor)].push(num)
        }

        arr = buckets.reduce((temp, bucket) => {
            temp.push(...bucket)
            return temp
        }, [])

        divisor *= 10
    }
    return arr
}

function getDigitAt(num, divisor) {
    return Math.floor((num % divisor) / (divisor / 10))
}

let array = [23, 53, 289, 123, 73, 32, 999]

console.log(bubbleSort(array))
console.log(selectionSort(array))
console.log(mergeSort(array))
console.log(quickSort(array))
console.log(radixSort(array))
