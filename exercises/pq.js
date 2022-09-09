function PriorityQueue() {
  this.values = [];
}

PriorityQueue.prototype.enqueue = function (val) {
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
};

PriorityQueue.prototype.dequeue = function () {
  const min = this.values[0];
  const end = this.values.pop();
  this.values[0] = end;

  let index = 0;
  const current = this.values[0];
  while (true) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
 
    let swap = findSwapIndex(this.values, current, leftChildIndex, rightChildIndex)

    if (swap === null) break;
    this.values[index] = this.values[swap];
    this.values[swap] = current;
    index = swap;
  }

  return min;
};

function findSwapIndex(values, current, leftChildIndex, rightChildIndex) {
  let res = null;
  let leftChild = values[leftChildIndex];
  let rightChild = values[rightChildIndex];
  if (leftChildIndex < values.length) {
    if (leftChild < current) {
      res = leftChildIndex;
    }
  }

  if (rightChildIndex < values.length) {
    if (
      (res === null && rightChild < current) ||
      (res !== null && rightChild < leftChild)
    ) {
      res = rightChildIndex;
    }
  }

  return res;
}

let pq = new PriorityQueue();
pq.enqueue(8);
pq.enqueue(2);
pq.enqueue(5);
pq.enqueue(6);
pq.enqueue(12);
pq.enqueue(9);

console.log(pq.values);

let val = pq.dequeue();
console.log(pq.values);
