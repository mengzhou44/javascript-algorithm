class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addLeft(node) {
        this.left = node;
    }

    addRight(node) {
        this.right = node;
    }
}

// function isValidBST(node) {
//     if (node === null) return true;

//     if (node.left !== null && node.data < node.left.data) {
//         return false;
//     }

//     if (node.right !== null && node.data > node.right.data) {
//         return false;
//     }

//     return isValidBST(node.left) && isValidBST(node.right);
// }

function isValidBST(node) {
    let visitList = [node];

    while (visitList.length > 0) {
        node = visitList.shift();
        if (node.left !== null && node.data < node.left.data) {
            return false;
        }
        if (node.right !== null && node.data > node.right.data) {
            return false;
        }

        if (node.left !== null) {
            visitList.push(node.left);
        }
        if (node.right !== null) {
            visitList.push(node.right);
        }
    }
    return true;
}

let node = new Node(4);
let node3 = new Node(3);
let node5 = new Node(5);

node.addLeft(node3);
node.addRight(node5);
node5.addRight(new Node(1));

console.log(isValidBST(node));
