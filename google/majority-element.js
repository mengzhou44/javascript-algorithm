module.exports = {
  //param A : array of integers
  //return an integer
  majorityElement: function (A) {
    let res = A[0];
    let count = 1;
    for (let i = 1; i < A.length; i++) {
      if (A[i] === res) {
        count++;
      } else {
        count--;
        if (count === 0) {
          count = 1;
          res = A[i];
        }
      }
    }
    return parseInt(res);
  },
};
