function generateParenthesis(n) {
    let res = []
    helper(res, '', n, n)
    return res
}

function helper(result, item, left, right) {
    if (left > right) return

    if (left === 0 && right === 0) result.push(item)

    if (left > 0) {
        helper(result, item + '(', left - 1, right)
    }

    if (right > 0) {
        helper(result, item + ')', left, right - 1)
    }
}

let result = generateParenthesis(3)
console.log(result)


function generateParenthesis(n) {
    if (n === 0)  return  []
    
    let result = [] 
    generate(0,0,"")
  
    return result 
   
    function generate(l, r, item) { 
         if (l<r) return 
         if (l=== n) {
             let count = n-r
             let k=0
             while(k<count) {
                 item=item+")"
                 k++
             }
             result.push(item)
             return 
         }
         if (l === r ) {
             generate(l+1, r, item+"(")        
         }
         
         generate(l+1,r, item+"(")
         generate(l, r+1, item+")")
                  
    }
 
}

