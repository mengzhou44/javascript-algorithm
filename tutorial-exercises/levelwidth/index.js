// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let array = [root, 's'];
  let counters = [0];
  while (array.length > 1) {
    let node = array.shift();
    if (node === 's') {
      array.push('s');
      counters.push(0);
    } else {
      array.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;
