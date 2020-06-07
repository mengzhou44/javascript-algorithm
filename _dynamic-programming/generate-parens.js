function generateParens(n) {
    let  str =new Array(n*2).fill(null)
    let list = []

    addParen(n,n,str, 0)

    function addParen(leftRem, rightRem, str, index) {
        if (leftRem<0 || rightRem < leftRem) return 
        if (leftRem=== 0 && rightRem === 0) {
           list.push(str.slice(0).join(''))
        } else {
            str[index]="("
            addParen(leftRem-1, rightRem,str,index+1)
            str[index]=")"
            addParen(leftRem, rightRem-1, str,index+1)
        } 
    }

    return list 
} 

 

console.log(generateParens(1))