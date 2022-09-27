function getAverageValuesBFS(root) {
  let res = [];
  let arr = [root];

  while (arr.length > 0) {
    let count = arr.length;
    let sum = 0;
    for (let i = 0; i < count; i++) {
      let node = arr.shift();

      sum += node.val;
      if (node.left) {
        arr.push(node.left);
      }
      if (node.right) {
        arr.push(node.right);
      }
    }
    res.push(sum / count);
  }

  return res;
}

function getAverageValues(root) {
  let arr = [];
  dfs(root);

  return arr.map(({ sum, count }) => sum / count);

  function dfs(cur, level = 0) {
    if (!arr[level]) {
      arr[level] = {
        sum: cur.val,
        count: 1,
      };
    } else {
      arr[level] = {
        sum: arr[level].sum + cur.val,
        count: arr[level].count + 1,
      };
    }

    if (cur.left) {
      dfs(cur.left, level + 1);
    }

    if (cur.right) {
      dfs(cur.right, level + 1);
    }
  }
}

let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 5,
    left: {
      val: 6,
    },
    right: {
      val: 7,
    },
  },
};

console.log(getAverageValues(root));
