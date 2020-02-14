class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function getIntersectionNode(head1, head2) {
    let array1 = []
    let array2 = []

    let node1 = head1
    let node2 = head2

    while (node1) {
        array1.push(node1)
        node1 = node1.next
    }

    while (node2) {
        array2.push(node2)
        node2 = node2.next
    }

    if (array1.length === 0 || array2.length === 0) {
        return null
    }

    let result = null
    while (array1.length > 0 && array2.length > 0) {
        let temp1 = peekStack(array1)
        let temp2 = peekStack(array2)
        if (temp1 !== temp2) {
            break
        }
        result = peekStack(array1)
        array1.pop()
        array2.pop()
    }

    return result
}

function peekStack(stack) {
    if (stack.length === 0) {
        return null
    }
    return stack[stack.length - 1]
}

// let node = new ListNode('c1')

// let head1 = node

// let head2 = new ListNode('b1')
// head2.next = node

console.log(getIntersectionNode(head1, head2))
