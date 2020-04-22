// function getPath(maze) {
//      let path=[]
//      dfs(maze, maze.length-1, maze[0].length-1) 
//      return path

//      function  dfs(maze, row, col) {       
//          if (row<0 || col<0 || maze[row][col] === 0) {
//              return false
//          }
//          if (row=== 0 && col === 0) {
//              path.push([row,col])
//              return true 
//          } else if (dfs(maze,row-1, col) || dfs(maze, row, col-1)) {
//              path.push([row,col])
//              return true 
//          }
          
//          return false
//      }
// }


function getPath(maze) {
    let path=[]
    dfs(maze,  0, 0) 
    return path

    function  dfs(maze, row, col, cache=new Map()) {   
        if (cache.has([row,col])) {
            return cache.get([row,col])
        }   
        let result = false
        if (row>maze.length-1 || col>maze[0].length-1 || maze[row][col] === 0) {
             result = false 
        } else {
            if (row=== maze.length-1 && col ===  maze[0].length-1) {  
                path.unshift([row,col])
                result = true 
            }
            if (dfs(maze,row+1, col) || dfs(maze,row, col+1)) {
                path.unshift([row,col])
                result = true
            }
        }
       
        cache.set([row,col], result)
        return  result
    }
}

let maze = [
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1]
];

let path = getPath(maze);

console.log(path);
