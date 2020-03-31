function kthSmallest(matrix, k) {
    let array = []
    for (let col = 0; col < matrix.length; col++) {
        let temp = []
        for (let row = 0; row < matrix.length; row++) {
            temp.push(matrix[row][col])
        }
        array.push(temp)
    }

    while (true) {
        let smallest = removeSmallest(array)
        k = k - 1
        if (k === 0) return smallest
    }
}

function removeSmallest(array) {
    let smallest
    let selectedCol
    for (let col of array) {
        if (col.length > 0) {
            if (smallest === undefined) {
                smallest = col[0]
                selectedCol = col
            } else {
                smallest = Math.min(smallest, col[0])
                if (smallest === col[0]) {
                    selectedCol = col
                }
            }
        }
    }

    selectedCol.shift()

    return smallest
}



*************


function kthSmallest(matrix, k) {
  let length = matrix.length
  let  lo =matrix[0][0]
  let  hi =matrix[length-1][length-1]
  
  while(lo<hi) {
       let mid = Math.floor((lo+hi)/2)
       let count =findCount(matrix,mid)
       if (count<k) {
           lo=mid+1
       } else {
           hi=mid
       }
  }
  return hi
}

function findCount(matrix, target) {
  let count = 0
  let j= matrix[0].length - 1
  for(let i = 0; i < matrix.length; i++) {
       while(j >= 0 && matrix[i][j] > target) j--;
       count += (j + 1);
  }
  
  return count
   
}



