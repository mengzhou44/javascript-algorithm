function getPermutations(str) {

  

    function createFreqTable(str) {
        let map={}
        str.split('').forEach(letter=> {
             if (map[letter] === undefined) {
                 map[letter]= 0
             }
             map[letter]++
        })
        return map
    }

    function helper(prefix, remaining) {
        if (remaining === 0) {
            result.push(prefix)
            console.log(prefix)
            return 
        }
        for (let key of Object.keys(map)) {
            let count = map[key]
            if (count > 0) {
                map[key] = count - 1
                helper(prefix + key, remaining - 1)
                map[key] = count
            }
        }
    }
 
    let map = createFreqTable(str)
    let result = []
    helper('', str.length)
    return result
}





console.log(getPermutations('abbd'))