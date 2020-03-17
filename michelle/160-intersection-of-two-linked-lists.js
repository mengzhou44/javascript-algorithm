function getIntersectionNode(head1, head2) {
    let array1 = []
    while (head1) {
        array1.push(head1)
        head1 = head1.next
    }

    let array2 = []
    while (head2) {
        array2.push(head2)
        head2 = head2.next
    }

    let intersection = null
    while (array1.length > 0 && array2.length > 0) {
        let node1 = array1.pop()
        let node2 = array2.pop()
        if (node1 === node2) {
            intersection = node1
        }
    }

    return intersection
}

function getIntersectionNode(head1, head2) {
    let p1 = head1
    let p2 = head2

    while (p1 !== p2) {
        if (p1 === null) {
            p1 = head2
        } else {
            p1 = p1.next
        }

        if (p2 === null) {
            p2 = head1
        } else {
            p2 = p2.next
        }
    }

    return p1
}
