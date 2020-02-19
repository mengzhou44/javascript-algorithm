class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function removeZeroSumSublists(head) {
    if (head === null) {
        return null
    }
    let array = []
    let temp = head
    while (temp) {
        array.push(temp.val)
        temp = temp.next
    }

    let removed = removeSumZeroArray(array)
    if (removed.length === 0) {
        return null
    }

    for (let i = 0; i < removed.length; i++) {
        if (i < removed.length - 1) {
            removed[i].next = removed[i + 1]
        }
    }
    return head
}

function removeSumZeroArray(array) {
    for (let i = 0; i < array.length; i++) {
        let sum = 0
        for (let j = i; j < array.length; j++) {
            sum += array[j]
            if (sum === 0) {
                array = array.slice(0, i) + array.slice(j + 1)

                return removeSumZeroArray(array)
            }
        }
    }

    return array
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(-3)
head.next.next.next.next = new ListNode(-2)

console.log(removeZeroSumSublists(head))
