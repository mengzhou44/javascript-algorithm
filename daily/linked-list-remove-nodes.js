class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function removeConseccutiveSumTo0(node) {
    let array = []
    while (node) {
        array.push(node.value)
        node = node.next
    }

    array = removeSum0SubArray(array, 0)
    return createLinkedList(array)
}

function createLinkedList(array) {
    let node = null
    for (let item of array) {
        if (node === null) {
            node = new ListNode(item)
        } else {
            node.next = new ListNode(item)
        }
    }
    return node
}

function removeSum0SubArray(array, startIndex) {
    for (i = startIndex; i < array.length; i++) {
        let sum = 0
        for (j = startIndex; j < array.length; j++) {
            sum += array[j]
            if (sum === 0) {
                array = array.slice(0, i) + array.slice(j + 1)
                return removeSum0SubArray(array, i)
            }
        }
    }
    return array
}

let node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(-3)
node.next.next.next = new ListNode(3)
node.next.next.next.next = new ListNode(1)

console.log(removeConseccutiveSumTo0(node))
