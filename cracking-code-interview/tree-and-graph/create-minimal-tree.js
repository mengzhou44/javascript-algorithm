class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function createMinimalBST(nums) {
    if (nums.length === 1) {
        return new Node(nums[0]);
    }

    let midIndex = Math.floor(nums.length / 2) - 1;

    let node = new Node(nums[midIndex]);

    node.left = createMinimalBST(nums.slice(0, midIndex + 1));
    node.right = createMinimalBST(nums.slice(midIndex + 1));

    return node;
}

let bst = createMinimalBST([1, 2, 3, 4, 5, 6,8,9]);
console.log(bst);
