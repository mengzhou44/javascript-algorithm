function kthSmallest(matrix, k) {
    let m= matrix.length
    let n = matrix[0].length
    let l = matrix[0][0]
    let r = matrix[m-1][n-1]+1
    while(l<r) {
        let mid = Math.floor((l+r)/2)
        let count = findXSmallest(mid, matrix)
      
        if (count<k) {
             l= mid+1
        }else {
            r=mid
        }
    }
  
     return l 
}

function findXSmallest(target, matrix) {
       
        let count = 0
        let m= matrix.length
        for(let row =0; row<m; row++) {
           let j= matrix[0].length-1
            while(j>=0 && matrix[row][j]> target) {
                j--
            }
            count= count+j+1
         }
       
        return count
        
}



******************************


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



