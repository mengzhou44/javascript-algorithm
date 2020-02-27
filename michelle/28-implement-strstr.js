function strStr(haystack, needle) {
    if (haystack === '' && needle === '') return 0

    for (let i = 0; i < haystack.length - needle.length +1; i++) {
        let temp = haystack.substring(i, i + needle.length)
        if (temp === needle) {
            return i
        }
    }
    return -1
}
