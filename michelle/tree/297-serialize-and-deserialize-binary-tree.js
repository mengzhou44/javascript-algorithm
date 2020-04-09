class TreeNode {
  constructor(val) {
      this.val = val
      this.left = null
      this.right = null
  }
}

function serialize(root) {
  let result = []

  if (root === null) return ''

  function dfs(root) {
      if (root === null) {
          result.push('null')
          return
      }

      result.push(root.val)
      dfs(root.left)
      dfs(root.right)
  }

  dfs(root)

  return result.join(',')
}

function deserialize(data) {
  if (data === '') return null
  let array = data.split(',')

  let temp = array.shift()
  let root = new TreeNode(temp)

  function dfs(root) {
      if (array.length === 0) return

      let temp = array.shift()
      if (temp !== undefined && temp !== 'null') {
          root.left = new TreeNode(temp)
          dfs(root.left)
      }

      temp = array.shift()
      if (temp !== undefined && temp !== 'null') {
          root.right = new TreeNode(temp)
          dfs(root.right)
      }
  }

  dfs(root)

  return root
}

 


console.log(serialize(tree))
