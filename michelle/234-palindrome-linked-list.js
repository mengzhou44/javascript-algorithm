var isPalindrome = function(head) {
    if (head === null) return true
    if (head.next === null) return true
    let node = head
    let array = []
    while (node) {
        array.push(node.val)
        node = node.next
    }

    let left = 0
    let right = array.length - 1
    while (left <= right) {
        if (array[left] !== array[right]) {
            return false
        }
        left++
        right--
    }

    return true
}

var isPalindrome = function(head) {
    if (head === null) return true
    if (head.next === null) return true

    let slowP = head
    let fastP = head
    let stack = []
    while (fastP && fastP.next) {
        stack.push(slowP.val)
        slowP = slowP.next
        fastP = fastP.next.next
    }

    if (fastP) {
        slowP = slowP.next
    }
    while (slowP) {
        if (slowP.val !== stack.pop()) {
            return false
        }
        slowP = slowP.next
    }

    return true
}
