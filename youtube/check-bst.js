function isValid(node) {
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;

  return helper(node, min, max);

  function helper(node, min, max) {
    if (node === null) return true;
    if (node.val < min || node.val > max) return false;

    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  }
}
