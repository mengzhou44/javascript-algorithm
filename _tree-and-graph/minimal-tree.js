class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function createMinimalBST(array) {
    if (array.length === 1) {
        return new Node(array[0])
    }
  //  array = array.sort((a, b) => a - b)
    let middle = Math.floor(array.length / 2)
    let node = new Node(array[middle])
    node.left = createMinimalBST(array.slice(0, middle))
    node.right = createMinimalBST(array.slice(middle + 1))

    return node
}

let array = [1, 2, 3, 4, 5, 6, 7]

console.log(createMinimalBST(array))
