var rotateRight = function(head, k) {
  
  if (head=== null || head.next === null) {
       return  head
  }
  let count = getListCount(head)
  
  k =  k % count
  if (k === 0)   return  head
   
  let p1=head
  let p2 =head
  
  for(let i=1; i<=k; i++) {
       p2=p2.next
  }
  
  while(p2 && p2.next) {
      p1=p1.next
      p2=p2.next
  }
  
  let result = p1.next
  p1.next = null
  
  p2.next = head
  return result
  
};

function getListCount(head) {
    let node = head;
    let count=0
    while(node) {
         count= count+1
         node = node.next
    }
  
    return count
}




********

function connect(root) {
    if (root === null) return root

    let array = [root]
    root.next = null

    while (array.length > 0) {
        let levelSize = array.length
        let count = 0

        while (count < levelSize) {
            let item = array.shift()

            if (item.left !== null && item.right !== null) {
                item.left.next = item.right
                item.right.next = null
                if (count > 0) {
                    array[array.length - 1].next = item.left
                }

                array.push(item.left)
                array.push(item.right)
            }

            count = count + 1
        }
    }

    return root
}
