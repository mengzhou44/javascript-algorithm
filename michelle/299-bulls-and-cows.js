/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
    let bulls = 0
    let map = new Map()
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++
        } else {
            if (map.has(secret[i])) {
                let temp = map.get(secret[i])
                temp[0] = temp[0] + 1
            } else {
                map.set(secret[i], [1, 0])
            }

            if (map.has(guess[i])) {
                let temp = map.get(guess[i])
                temp[1] = temp[1] + 1
            } else {
                map.set(guess[i], [0, 1])
            }
        }
    }

    let cows = 0
    for (let key of map.keys()) {
        let [value1, value2] = map.get(key)
        cows += Math.min(value1, value2)
    }

    return `${bulls}A${cows}B`
}
