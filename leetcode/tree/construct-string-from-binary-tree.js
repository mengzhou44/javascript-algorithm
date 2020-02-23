class Node {
  constructor(val) {
      this.val = val
      this.left = null
      this.right = null
  }
}


var tree2str = function(t) {
  if (t === null)  {
      return "";
  }

  if (t.left === null && t.right=== null ) {
      return `${t.val}`;
  }

  if ( t.right=== null ) {
      return `${t.val}(${tree2str(t.left)})`;
  }

  return `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`;
       
};  
