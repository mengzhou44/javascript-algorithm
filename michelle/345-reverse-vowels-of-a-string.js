function reverseVowels(s) {
    let array = []
    for (let c of s) {
        if (containsVowels(c)) {
            array.push(c)
        }
    }
    let result = []
    for (let i = 0; i < s.length; i++) {
        if (containsVowels(s[i])) {
            result.push(array.pop())
        } else {
            result.push(s[i])
        }
    }

    return result.join('')
}

function containsVowels(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())
}


**************
var reverseVowels = function(s) {
    let vowels = 'aeiou'
    let l = 0
    let r = s.length - 1
    let array = s.split('')
    while (l < r) {
        if (!vowels.includes(array[l].toLowerCase())) {
            l = l + 1
        } else if (!vowels.includes(array[r].toLowerCase())) {
            r = r - 1
        } else {
            let temp = array[l]
            array[l] = array[r]
            array[r] = temp

            l = l + 1
            r = r - 1
        }
    }

    return array.join('')
}
