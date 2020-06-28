*/
function solveSudoku(board) {
    let rows = new Map()
    let cols = new Map()
    let boxes = new Map()
    
    for(let i=0; i<9; i++) {
        rows.set(i, new Set())
        cols.set(i, new Set())
        boxes.set(i, new Set())
    }
    
    for(let row=0; row<9; row++) {
         for(let col=0;col<9; col++) {
               if (board[row][col] !== '.') {
                   let val = parseInt(board[row][col])
                   rows.get(row).add(val)
                   cols.get(col).add(val)
                   let boxNumber = getBoxNumber(row,col)
                   boxes.get(boxNumber).add(val)
               }
         }
    }
    
    dfs(0,0)
    
    function dfs(x, y) {
     
        if (x=== 9 )   return true
        let ny = (y +1) %9
        let nx  = (ny=== 0) ? x+1: x
        
        if (board[x][y]!=='.') return  dfs(nx, ny)
        for(let num =1; num<10; num++) {
            let boxNumber = getBoxNumber(x,y)
            if (rows.get(x).has(num) || cols.get(y).has(num) || boxes.get(boxNumber).has(num)) {
                continue
            }
            rows.get(x).add(num)
            cols.get(y).add(num)
            boxes.get(boxNumber).add(num)
            board[x][y] = num.toString()
            if (dfs(nx,ny)) {
                return true 
            }
            
            rows.get(x).delete(num)
            cols.get(y).delete(num)
            boxes.get(boxNumber).delete(num)
            board[x][y] = '.'
        }
        
        return false 
    }

}


function getBoxNumber(row, col) {
     let bx = Math.floor(row/3)
     let by = Math.floor(col/3)
     return (bx*3 +by)
}

