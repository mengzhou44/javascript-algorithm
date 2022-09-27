const { deflateSync } = require("zlib");

function traverseBFS(n, edges, start) {
  let map = new Map();
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
  }

  for (let [from, to] of edges) {
    map.get(from).push(to);
  }

  let arr = [start];
  let visited = new Array(1 + n).fill(0);

  while (arr.length > 0) {
    let node = arr.shift();
    visited[node] = 1;
    console.log(node);
    for (let nei of map.get(node)) {
      if (visited[nei] === 0) {
        arr.push(nei);
      }
    }
  }
}

function traverseDFS(n, edges) {
  let map = new Map();
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
  }

  for (let [from, to] of edges) {
    map.get(from).push(to);
  }

 

  let visited = new Array(1 + n).fill(0);
  // for(let i=1; i<=n; i++) {
  //     dfs(i);
  // }
   dfs(1)

 
  function dfs(cur) {
      if  (visited[cur] === 1) return 
      visited[cur] = 1 
      for(let node of map.get(cur)) {
         dfs(node)
   
      }
      console.log(cur);
  }
   
}

// traverseBFS(
//   5,
//   [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [1, 4],
//     [2, 5],
//   ],
//   1
// );



traverseDFS(
  6,
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [2, 5],
  ]
);