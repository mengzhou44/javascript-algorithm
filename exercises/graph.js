class Node {
  constructor(key) {
     this.key = key;
     this.neighbours = [];
  }

  addEdge(node) {
    this.neighbours.push(node);
  }

  removeEdge(node) {
    this.neighbours = this.neighbours.filter(edge.key !== node.key);
  }

  toString() {
    return this.key;
  }
}

class Graph {
  constructor() {
    this.map = new Map();
  }

  addNode(key) {
    this.map.set(key, new Node(key));
  }

  removeNode(key) {
    let nodes = this.map.values();
    for (let node of nodes) {
      node.neighbours = node.neighbours.filter((node) => node.key !== key);
    }
    this.map.delete(key);
  }

  addEdge(from, to) {
    if (this.isNodeValid(from) && this.isNodeValid(to)) {
      this.map.get(from).addEdge(to);
    }
  }

  removeEdge(from, to) {
    if (this.isNodeValid(from) && this.isNodeValid(to)) {
      this.map.get(from).removeEdge(to);
    }
  }

  isNodeValid(key) {
    return this.map.has(key);
  }

  traverseDFS() {
    let map = this.map;
    let visited = new Set();
    for (let node of map.values()) {
      dfs(node);
    }

    function dfs(node) {
      if (visited.has(node.key)) return;
      visited.add(node.key);
      console.log(node.key);
      for (let item of node.neighbours) {
        dfs(map.get(item));
      }
    }
  }
 

  traverseBFS() {
    let map = this.map;
    let visited = new Set();
    for (let node of map.values()) {
      bfs(node);
    }

    function bfs(node) {
      let array = [node];
      while (array.length > 0) {
        let item = array.shift();
        if (visited.has(item.key)) continue;
        visited.add(item.key);
        console.log(item.key);
        for (let i of item.neighbours) {
          array.push(map.get(i));
        }
      }
    }
  }

  topologicalSort() {
    let map = this.map;
    let visited = new Set();
    let result = [];
    for (let node of map.values()) {
      dfs(node);
    }
    return result;

    function dfs(node) {
      if (visited.has(node.key)) return;
      visited.add(node.key);
      for (let item of node.neighbours) {
        dfs(map.get(item));
      }
      result.unshift(node.key);
    }
  }

  print() {
    for (let node of this.map.keys()) {
      const adjacencyList = this.map.get(node).neighbours;
      console.log(`${node} is conected with [${adjacencyList.join(', ')}]`);
    }
  }
}

const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'D');
graph.addEdge('D', 'C');
graph.addEdge('A', 'C');

graph.traverseDFS();
console.log('*****************')
graph.traverseBFS();


const graph2 = new Graph();

graph2.addNode('X');
graph2.addNode('A');
graph2.addNode('B');
graph2.addNode('P');

graph2.addEdge('X', 'A');
graph2.addEdge('X', 'B');
graph2.addEdge('A', 'P');
graph2.addEdge('B', 'P');

console.log(graph2.topologicalSort());
