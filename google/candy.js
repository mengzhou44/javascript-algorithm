module.exports = {
  //param A : array of integers
  //return an integer
  candy: function (A) {
    let arr1 = new Array(A.length).fill(1);
    for (let i = 1; i < A.length; i++) {
      if (A[i] > A[i - 1]) {
        arr1[i] = arr1[i - 1] + 1;
      }
    }

    let arr2 = new Array(A.length).fill(1);
    for (let i = A.length - 2; i >= 0; i--) {
      if (A[i] > A[i + 1]) {
        arr2[i] = arr2[i + 1] + 1;
      }
    }
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
      sum += Math.max(arr1[i], arr2[i]);
    }
    return sum;
  },
};
