var detectCapitalUse = function(word) {
    if (word.toUpperCase() === word) {
        return true
    } else {
        let temp = word.slice(1)
        if (temp.toLowerCase() === temp) {
            return true
        }
    }

    return false
}
