// find-union algorithm 

function find(data, i) {
    if (i !==data[i]) {
        data[i] = findData(data, data[i])
    }
    return data[i]
}

