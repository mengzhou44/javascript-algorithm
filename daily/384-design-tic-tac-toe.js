class TicTacToe {
  constructor() {
      this.board = new Array(3)
      for(let row =0; row<this.board.length; row++) {
          this.board[row] = new Array(3).fill(' ')
      }
      this.rowsCounter=new Array(3).fill(0)
      this.columnsCounter=new Array(3).fill(0)
      this.diagLeft=0
      this.diagRight=0
  }
  
  move(row, col, player) {
      let move = player === 1? 1 : -1 
      this.rowsCounter[row]+=move
      this.columnsCounter[col]+=move
      if (row === col)  this.diagLeft+=move
      if (row+col === 2) this.diagRight+=move
      if (this.isPlayerWins(row, col, player)) {
            return player
      }
        
      return 0
  }

  isPlayerWins(row, col, player) {
       let movesToWin = player === 1? 3 : -3 
       if (this.rowsCounter[row] === movesToWin || 
           this.columnsCounter[col] === movesToWin ||
           this.diagLeft=== movesToWin || 
           this.diagRight === movesToWin) {
            return true 
       }
      

      return false 
  }
}


let board =  new TicTacToe()
 

console.log(board.move(0, 0, 1))
console.log(board.move(0, 2, 2))
console.log(board.move(2, 2, 1))
console.log(board.move(1, 1, 2))
console.log(board.move(2, 0, 1))
console.log(board.move(1, 0, 2))
console.log(board.move(2, 1, 1))
 




