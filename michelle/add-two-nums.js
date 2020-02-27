class ListNode {
    constrcutor(val) {
        this.val = val
        this.next = null
    }
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(-1)
    let head = dummy
    let carry = 0
    while (l1 || l2) {
        let sum = carry
        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }
        dummy.next = new ListNode(sum % 10)
        dummy = dummy.next

        carry = Math.floor(sum / 10)
    }
    if (carry > 0) {
        dummy.next = new ListNode(carry)
    }

    return head.next
}

// function addTwoNumbers(l1, l2) {
//     let array1 = []
//     let array2 = []

//     while (l1 !== null) {
//         array1.unshift(l1.val)
//         l1 = l1.next
//     }

//     while (l2 !== null) {
//         array2.unshift(l2.val)
//         l2 = l2.next
//     }

//     let size = Math.max(array1.length, array2.length)
//     let count = 0
//     let array = []
//     let carry = 0
//     while (count < size) {
//         let sum = carry
//         if (array1.length > 0) {
//             sum += array1.pop()
//         }
//         if (array2.length > 0) {
//             sum += array2.pop()
//         }
//         array.unshift(sum % 10)
//         carry = Math.floor(sum / 10)
//         count++
//     }

//     if (carry > 0) {
//         array.unshift(carry)
//     }

//     array = array.reverse()

//     let dummy = new ListNode(-1)
//     let head = dummy
//     while (array.length > 0) {
//         let cur = array.shift()
//         dummy.next = new ListNode(cur)
//         dummy = dummy.next
//     }

//     return head.next
// }
