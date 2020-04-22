function minMutation(start, end, bank) {
    if (!bank.includes(end)) return -1

    bank = bank.map((item) => {
        return {
            gene: item,
            used: false,
        }
    })

    let mutations = 0
    let minMutations = Number.MAX_SAFE_INTEGER
    dfs(start, end, bank)

    if (minMutations === Number.MAX_SAFE_INTEGER) {
        return -1
    }

    return minMutations

    function dfs(current, end, bank) {
        if (current === end) return true
        let possibleGenes = bank.filter(
            (item) => item.used === false && canMutate(current, item.gene)
        )

        if (possibleGenes.length === 0) {
            return false
        }
        for (let i = 0; i < possibleGenes.length; i++) {
            mutations++
            possibleGenes[i].used = true
            if (dfs(possibleGenes[i].gene, end, bank)) {
                minMutations = Math.min(mutations, minMutations)
            }
            mutations--
            possibleGenes[i].used = false
        }
        return false
    }
}

function canMutate(current, gene) {
    let difference = 0
    for (let i = 0; i < current.length; i++) {
        if (current[i] !== gene[i]) {
            difference++
        }
    }
    return difference === 1
}
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
function  minMutation(start, end, bank) {
  if (!bank.includes(end)) return -1 
   
  bank = bank.map(item=> {
     return {
         gene: item,
         used:false
     }
  })
   
  let mutations= 0
  let minMutations= Number.MAX_SAFE_INTEGER
  dfs(start, end, bank) 
  
   if (minMutations=== Number.MAX_SAFE_INTEGER) {
       return -1 
   }
   
   return minMutations
  
   function dfs(current, end, bank) {
       
        if (current === end) return true 
      
        let possibleGenes= bank.filter(item=> item.used === false && 
                                         canMutate(current,item.gene))
       
        if (possibleGenes.length === 0) {
             return false  
        }
        for(let i=0; i<possibleGenes.length; i++)   {
            mutations++
            possibleGenes[i].used= true
            if (dfs(possibleGenes[i].gene,end,bank)) {
                minMutations = Math.min(mutations, minMutations)
            }
            mutations--
            possibleGenes[i].used= false
        }
       
        return false 
   }
   
}

function canMutate(current, gene) {
   let difference = 0
   for(let i=0; i<current.length; i++) {
       if (current[i] !== gene[i]) {
           difference++
       }
   }
   return difference === 1 
}