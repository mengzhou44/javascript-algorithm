// function countWays(n) {

//    if (n === 1)  return 1
//    if (n === 2 )  return 2
//    if (n ===3 )   return 3
//    return countWays(n-1) +countWays(n-2) + countWays(n-3)

// }

function countWays(n) {
    let arr = Array(n + 1).fill(-1);
    helper(n, arr);
    return arr[n];
}

function helper(n, arr) {
    if (arr[n] === -1) {
        if (n <= 3) {
            arr[n] = n;
        } else {
            arr[n] =
                helper(n - 1, arr) + helper(n - 2, arr) + helper(n - 3, arr);
        }
    }
    return arr[n];
}

console.log(countWays(10));
