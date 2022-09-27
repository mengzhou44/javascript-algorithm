class PriorityQueue {
  constructor() {
    this.values = [];
  }

  getQueue() {
    return [...this.values];
  }

  getSize() {
    return this.values.length;
  }

  enqueue(val) {
    this.values.push(val);
    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent > val) {
        this.values[index] = parent;
        this.values[parentIndex] = val;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (this.values.length == 1)  return this.values.pop()
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let index = 0;
    while (true) {
      const current = this.values[index];
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      let swap = this.findSwapIndex(current, leftChildIndex, rightChildIndex);

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }
    return min;
  }

  findSwapIndex(current, leftChildIndex, rightChildIndex) {
    let swap = null;
    let leftChild = this.values[leftChildIndex];
    let rightChild = this.values[rightChildIndex];
    if (leftChildIndex < this.values.length) {
      if (leftChild < current) {
        swap = leftChildIndex;
      }
    }

    if (rightChildIndex < this.values.length) {
      if (
        (swap === null && rightChild < current) ||
        (swap !== null && rightChild < leftChild)
      ) {
        swap = rightChildIndex;
      }
    }

    return swap;
  }
}

/*
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

function cookies(k, A) {
  let pq = new PriorityQueue();
  for (let item of A) {
    pq.enqueue(item);
  }

  console.log(pq.getQueue());
  let count = 0;
  while (isSweetnessNotSufficient(pq, k)) {
    if (pq.getSize() <2) return -1 
    let least = pq.dequeue();
    let secondLeast = pq.dequeue();
    let cookie = least + 2 * secondLeast;

    pq.enqueue(cookie);
    console.log(pq.getQueue());
    count++;
  }
  return count;
}

function isSweetnessNotSufficient(pq, k) {
  let cookies = pq.getQueue();

  let found = cookies.find((item) => item < k);
  return found !== undefined;
}

console.log(cookies(3, [1, 1, 1]));
