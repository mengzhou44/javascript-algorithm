function hasCharacterMap(str1, str2) {
    let map = new Map()
    if (str1.length !== str2.length) return false

    for (let i = 0; i < str1.length; i++) {
        if (map.has(str1[i])) {
            if (map.get(str1[i]) !== str2[i]) {
                return false
            }
        } else {
            map.set(str1[i], str2[i])
        }
    }
    return true
}


console.log(hasCharacterMap("abc", "def"))
console.log(hasCharacterMap("aba", "d"))