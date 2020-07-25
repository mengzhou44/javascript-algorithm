let map = new Map()
map.set('M', 1000)
map.set('CM', 900)
map.set('D', 500)
map.set('CD', 400)
map.set('C', 100)
map.set('XC', 90)
map.set('L', 50)
map.set('XL', 40)
map.set('X', 10)
map.set('IX', 9)
map.set('V', 5)
map.set('IV', 4)
map.set('I', 1)

function intToRoman(num) {
    let array = []
    for (let key of map.keys()) {
        let val = map.get(key)
        let temp = Math.floor(num / val)
        num = num - temp * val
        array.push(createSymbols(temp, key))
    }
    return array.join('')
}

function createSymbols(num, symbol) {
    return new Array(num).fill(symbol).join('')
}
