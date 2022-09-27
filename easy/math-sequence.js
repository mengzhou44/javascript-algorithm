function mathSequence(arr) {
  let arr1 = arr.map((item) => item * 2);
  let arr2 = arr.map((item) => item ** 2);

  const isArithmetric = isPattern(arr, arr1);

  if (isArithmetric) return 'arithmetric';

  const isGeometric = isPattern(arr, arr2);

  if (isGeometric) return 'geometric';

  return -1;
}

function isPattern(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return truue;
}
