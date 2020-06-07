function flattenDictionary(d) {
    let result = {}
    for (let prop in d) {
        let keyValuePairs = helper(d[prop], prop)
        for (let item of keyValuePairs) {
            result[item.key] = item.value
        }
    }
    return result
}

function helper(item, prefix) {
    if (typeof item !== 'object') {
        return [{ key: prefix, value: item }]
    }
    let result = []
    for (let key in item) {
        let newPrefix = prefix + '.' + key
        let temp = helper(item[key], newPrefix)

        result = [...result, ...temp]
    }
    return result
}

let d = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
        },
    },
}
console.log(flattenDictionary(d))
