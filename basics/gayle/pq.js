class PQ {
  constructor() {
    this.values = [];
  }

  enqueue(val) {
    this.values.push(val);
    let index = this.values.length - 1;

    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0) {
      if (this.values[parentIndex] > this.values[index]) {
        let temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[index];
        this.values[index] = temp;
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      } else {
        break;
      }
    }
  }

  dequeue() {
    let val = this.values[0];
    this.values[0] = this.values.pop();
    if (this.values.length < 2) return val;

    let index = 0;

    while (true) {
      let current = this.values[index];
      let [leftChildIndex, rightChildIndex] = [2 * index + 1, 2 * index + 2];
      let swap = this.findSwapIndex(current, leftChildIndex, rightChildIndex);

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }

    return val;
  }

  findSwapIndex(current, leftChildIndex, rightChildIndex) {
    let leftChild = this.values[leftChildIndex];
    let rightChild = this.values[rightChildIndex];

    let swap = null;
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

let pq = new PQ();
pq.enqueue(3);
pq.enqueue(9);
pq.enqueue(7);
pq.enqueue(2);

console.log(pq.dequeue()); //2
console.log(pq.dequeue()); //3
console.log(pq.dequeue()); //7
console.log(pq.dequeue()); //9
