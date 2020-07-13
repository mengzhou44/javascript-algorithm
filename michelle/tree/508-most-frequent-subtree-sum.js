function findFrequentTreeSum(root) {
    if (root === null) return []
    let map = new Map()

    function dfs(root) {
        if (root === null) {
            return 0
        }
        if (root.left === null && root.right === null) {
            addToMap(root.val, map)
            return root.val
        }

        let sum = dfs(root.left) + dfs(root.right) + root.val
        addToMap(sum, map)
        return sum
    }

    dfs(root)

    return findFrequentSums(map)
}

function findFrequentSums(map) {
    let result = []
    let maxFrequencies = 0

    for (let [key, value] of map) {
        if (value > maxFrequencies) {
            maxFrequencies = value
            result = [key]
        } else if (value === maxFrequencies) {
            result.push(key)
        }
    }
    return result
}

function addToMap(sum, map) {
    if (!map.has(sum)) {
        map.set(sum, 1)
    } else {
        map.set(sum, map.get(sum) + 1)
    }
}


********

function findFrequentTreeSum(root) {
    let array = [] 
    let map  = new Map()
    dfs(root)
    array.sort((a,b)=> b.count-a.count)
    return array.filter(item=> item.count === array[0].count).map(item=> item.sum)
 
    function dfs(root) {
        if (root === null) return
       
        let sum = getSum(root, map)
    
        let found = array.find(item=> item.sum === sum) 
        if (found=== undefined) {
            array.push({
                sum,
                count:1
            })
        }else {
            found.count++
        }
        dfs(root.left)
        dfs(root.right)
    }
}

function getSum(node, map){
   
     if (map.has(node)) return map.get(node)
     if (node === null) return 0 
     
     let val = node.val + getSum(node.left,map) +getSum(node.right,map)
     map.set(node, val)
     return val 
}


*********

function findFrequentTreeSum(root) {
    if (root === null)  return []
    let cache = new Map()
    let sums= [] 
    dfs(root)
 
    
     let max = sums.sort((a,b)=> b.count-a.count)[0].count
     
     return sums.filter(item=> item.count=== max).map(item=> item.sum)
   
    function dfs(root) {
        if (root === null)  return 0
        
         if (cache.has(root)) return cache.get(root)
        
         let sum = root.val + dfs(root.left) +dfs(root.right)
         
         cache.set(root, sum)
        
         let found = sums.find(item=> item.sum=== sum) 
         if (found === undefined) {
            sums.push({sum, count:1})
         } else {
             found.count++
         }         
         return sum
    }
  
}
