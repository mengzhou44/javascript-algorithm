//www.youtube.com/watch?v=Ifwf3DBN1sc&list=PLX6IKgS15Ue02WDPRCmYKuZicQHit9kFt&index=21

https: function findChoices(menu, money) {
  let sorted = [...menu].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    let complement = money - sorted[i];

    let index = findIndex(sorted, i + 1, sorted.length - 1, complement);
    if (index >= 0 && index < sorted.length && sorted[index] === complement) {
      let indexes = getIndexesFromValues(sorted[i], complement);
      return indexes;
    }
  }
  return null;

  function getIndexesFromValues(val1, val2) {
    let index1 = menu.indexOf(val1);
    for (let i = 0; i < menu.length; i++) {
      if (i !== index1 && menu[i] === val2) {
        return [index1, i].sort((a, b) => a - b);
      }
    }
    return null;
  }

  function findIndex(arr, start, end, target) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
}

console.log(findChoices([2, 7, 13, 5, 4, 13, 5], 10));
