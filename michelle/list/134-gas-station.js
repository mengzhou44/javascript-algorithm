function canCompleteCircuit(gas, cost) {
    let dummy = new LinkedNode(-1)
    let current = dummy
    for (let i = 0; i < gas.length; i++) {
        current.next = new LinkedNode({
            index: i,
            gas: gas[i],
            cost: cost[i],
        })
        current = current.next
    }

    current.next = dummy.next

    let head = dummy.next

    let count = 0
    while (count < gas.length) {
        let index = canComplete(head)
        if (index !== -1) {
            return index
        }
        head = head.next
        count++
    }

    return -1
}

function canComplete(head) {
    let gasLeft = 0
    let current = head
    while (true) {
        gasLeft += current.val.gas
        gasLeft -= current.val.cost

        if (gasLeft >= 0) {
            current = current.next
            if (current.val.index === head.val.index) {
                return head.val.index
            }
        } else {
            return -1
        }
    }
}

class LinkedNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


**************
function canCompleteCircuit(gas, cost) {
  for(let i=0; i<gas.length; i++)   {
      if (canComplete(i, gas,cost)) {
           return i 
      }
  }   
  return -1 
}

function canComplete(index, gas, cost) {
  let gasLeft= 0 
  for(let i=index; i<gas.length+index+1; i++) {
       if (i<gas.length) {
           gasLeft +=gas[i]
           gasLeft -=cost[i]
       }else {
           gasLeft +=gas[i-gas.length]
           gasLeft -=cost[i-gas.length]
       }
        
       if (gasLeft<0) {
          return false 
      }
  }
 return true 
}