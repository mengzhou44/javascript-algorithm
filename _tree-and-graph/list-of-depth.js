class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function createLevelLinkedLists(root) {
    let array = [root, 's']
    let level = [root]
    let list = []
    while (array.length > 1) {
        let node = array.shift()
        if (node === 's') {
            let temp = createLinkedList(level)
          
            list.push(temp)
            level = []
            array.push('s')
        } else {
            if (node.left !== null) {
                array.push(node.left)
                level.push(node.left.val)
            }
            if (node.right !== null) {
                array.push(node.right)
                level.push(node.right.val)
            }
        }
    }
    return list
}

function createLinkedList(level) {
    if (level.length === 1) {
        return new ListNode(level[0])
    }
    let head = new ListNode(level[0])
    let node = head
    for (let i = 0; i < level.length - 1; i++) {
        node.next = new ListNode(level[i + 1])
        node = node.next
    }
    return head
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

node4.left = node2
node4.right = node6

node2.left = node1
node2.right = node3

node6.left = node5
node6.right = node7

console.log(createLevelLinkedLists(node4))
