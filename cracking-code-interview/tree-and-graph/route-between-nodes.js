const { Node } = require('./_graph');
const { Queue } = require('./_queue');

function search(startNode, endNode) {
    if (startNode === endNode) return true;

    const visited = [];
    const visitList = new Queue();

    visitList.add(startNode);

    while (!visitList.isEmpty()) {
        const node = visitList.remove();
       
        const adjacents = node.getAdjacents();

        for (let adjacent of adjacents) {
            if (visited.includes(adjacent)) {
                continue;
            }
            if (endNode === adjacent) {
                return true;
            }

            visited.push(adjacent);
            visitList.add(adjacent);
        }
    }
    return false;
}

let startNode = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let endNode = new Node(5);

startNode.addAdjacent(node2);
startNode.addAdjacent(node3);
node2.addAdjacent(node3);
node3.addAdjacent(node4);
node4.addAdjacent(endNode);

console.log(search(startNode, endNode));
