// function solveKnackpack(profits, weights, capacity) {
//   let n = profits.length;
//   return helper(capacity, 0);

//   function helper(capacity, index) {
//     if (index >= n || weights[index] > capacity) return 0;

//     let profits1 = 0

//     if (weights[index] <=capacity) {
//         profits1= profits[index] + helper(capacity - weights[index], index + 1);
//     }

//     let profits2 = helper(capacity, index + 1);

//     return Math.max(profits1, profits2);
//   }
// }

// function solveKnackpack(profits, weights, capacity) {
//   let n = profits.length;
//   let dp = new Array(n)
//   for(let j=0; j<n; j++) {
//     dp[j] = new Array(capacity+1).fill(null)
//   }

//   let result = helper( 0, capacity );
//   return result

//   function helper(index, capacity) {
//     if (capacity<=0 || index>=n) return 0;
//     if (dp[index][capacity]!== null ) {
//             return dp[index][capacity];
//     }

//     let profits1 = 0

//     if (weights[index] <=capacity) {
//         profits1= profits[index] + helper(index + 1, capacity - weights[index]);
//     }

//     let profits2 = helper(index+1, capacity);

//     let max =  Math.max(profits1, profits2);

//     dp[index][capacity] = max

//     return max
//   }
// }

function solveKnackpack(profits, weights, capacity) {
  let n = profits.length;
  let dp = new Array(n);
  for (let j = 0; j < n; j++) {
    dp[j] = new Array(capacity + 1).fill(0)
  }

  for(let i=0; i<n ;i++) {
     dp[i][0] = 0;
  }

  for (let c= 0; c < capacity + 1; c++) {
    if (weights[c] <= capacity) {
      dp[0][c] = profits[0];
    } else {
         dp[0][c] = 0
    }
  }


  for (let i = 1; i < n; i++) {
    for (let c = 1; c < capacity + 1; c++) {
      let profits1 = 0;
      let profits2 = 0;

      if (weights[i] <= c) {
        profits1 = profits[i] + dp[i- 1][c - weights[i]];
      }
      profits2 = dp[i-1][c];
      dp[i] = Math.max(profits1, profits2);
    }
  }
  console.log(dp)
  return dp[n-1][capacity]
}

console.log(solveKnackpack([1, 6, 10, 16], [1, 2, 3, 5], 7));
