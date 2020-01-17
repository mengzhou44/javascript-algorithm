// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minOfIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minOfIndex]) {
        minOfIndex = j;
      }
    }

    if (minOfIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minOfIndex];
      arr[minOfIndex] = temp;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, center);
  const rightArray = arr.slice(center);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift(0));
    } else {
      result.push(right.shift(0));
    }
  }
  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
