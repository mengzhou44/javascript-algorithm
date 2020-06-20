let map = new Map()
let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(
   ''
)

var encode = function(longUrl) {
    if (map.get(longUrl) !== undefined) {
        return map.get(longUrl)
    }
    let temp = []
    for (let i = 0; i < 6; i++) {
        let letter = letters[Math.floor(Math.random() * 63)]
        temp.push(letter)
    }
    let result = temp.join('')
    map.set(longUrl, result)

    return result
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    for (let entry of map.entries()) {
        if (entry[1] === shortUrl) {
            return entry[0]
        }
    }
    throw new Error('Error occured!')
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 *******
 let map = new Map()
 
function encode(longUrl) {
    let hash=0
    for(let i=0; i<longUrl.length; i++) {
        hash = (hash<<5) -hash + longUrl.charCodeAt(i)|0 
    }
    
    let temp = hash.toString().split('').filter(item=> item!=='-')
   
    let shortUrl = temp.map(item=> String.fromCharCode(97+parseInt(item))).join('')
    map.set(shortUrl, longUrl)
    
    return shortUrl
}


/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
function decode(shortUrl) {
    console.log(shortUrl)
    return map.get(shortUrl)     
}

 
