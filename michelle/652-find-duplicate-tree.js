function findDuplicateSubtrees(root) {
    let result = new Set()
    let array = []
    dfs(root)
    if (array.length <= 1) return []
   
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let temp = isSameTree(array[i], array[j])
            console.log(temp)
            if (temp) {
                result.add(array[i])
            }
        }
    }

    return Array.from(result)
    function dfs(root) {
        if (root === null) return
        array.push(root)
        dfs(root.left)
        dfs(root.right)
    }
}

function isSameTree(p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

***************************

function findDuplicateSubtrees(root) {
   let map = new Map()
   dfs(root)
  
   let result =[] 
 
  for(let {node, count } of map.values()) {
       if (count>1) {
           result.push(node)
       }
  }
  return  result
  function dfs(root){
      if (root === null) return 
      let temp = getTreeCode(root)
      if(!map.has(temp)) {
          map.set(temp, {node: root, count: 1})
      } else {
          let {node,count} = map.get(temp)
          count++
          map.set(temp, {node,count})
      }
      dfs(root.left)
      dfs(root.right)
  }
}

function getTreeCode(root){

 let array=[] 
 dfs(root)
 return  array.join(',')
 
 function dfs(root) {
     if (root === null)  {
         array.push(' ')
         return 
     }  
     array.push(root.val)
     dfs(root.left)
     dfs(root.right)
 }
}



function findDuplicateSubtrees(root) {
  let  map=new Map()
  let  result = [] 
  dfs(root)
  return Array.from(map.values())
         .filter(item=> item.count>1)
         .map(item=> item.node)

  function  dfs(root) {
      if (root === null) return '#'
      let temp = `${root.val}, ${dfs(root.left)}, ${dfs(root.right)}` 
    
      if (!map.has(temp)) {
           map.set(temp, {node:root, count:1})
      }else {
           let {node,count } = map.get(temp)
           count++
           map.set(temp, {node,count})
      }
      return temp 
  }
 
}



