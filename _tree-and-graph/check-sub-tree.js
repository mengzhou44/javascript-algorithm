class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    setLeft(node) {
        this.left = node;
    }

    setRight(node) {
        this.right = node;
    }
}

// function containsTree(t1, t2) {
//     let temp1 = [];
//     let temp2 = [];
//     getOrderString(t1, temp1);
//     getOrderString(t2, temp2);
//     console.log(temp1.join(','));
//     console.log(temp2.join(','));
//     return temp1.join(',').indexOf(temp2.join(',')) !== -1;
// }

// function getOrderString(t, arr) {
//     if (t === null) {
//         arr.push('X');
//         return;
//     }

//     arr.push(t.data);
//     getOrderString(t.left, arr);
//     getOrderString(t.right, arr);
// }


function containsTree(t1, t2) {
     let arr=[t1]
     while(arr.length>0) {
        let node = arr.shift()
        if (node.data = t2.data) {
             if (isEqual(node, t2)) {
                  return true
             }   
        }
        if (node.left!== null) {
           arr.push(node.left)
        }
        if (node.right!== null) {
          arr.push(node.right)
       }
     }
     return false

}

function isEqual(node1, node2) {
     if (node1 === null && node2 === null) {
          return true
     }
     if (node1 === null || node2 === null) return false 

     if (node1.data !== node2.data)  return false 

     return isEqual(node1.left, node2.left) && isEqual(node1.right,node2.right)
}

let root = new Node(15);
let node12 = new Node(12);

let node3 = new Node(3);
let node14 = new Node(14);

let node17 = new Node(17);
let node18 = new Node(18);
let node16 = new Node(16);
let node19 = new Node(19);
let node20 = new Node(20);

root.setLeft(node12);
root.setRight(node17);

node12.setLeft(node3);
node12.setRight(node14);

node17.setLeft(node16);
node17.setRight(node18);

node18.setRight(node19);

let subTree = new Node(17)
let n18 = new Node(18);
let n16 = new Node(16);
let n19 = new Node(19);
let n20 = new Node(20);

subTree.setLeft(n16);
subTree.setRight(n18);

n18.setRight(n19);

let contains = containsTree(root, subTree);
console.log(contains);
