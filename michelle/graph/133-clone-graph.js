function cloneGraph(node) {
    if (node === null) return null
    let map = new Map()
    return dfs(node)

    function dfs(node) {
        if (map.has(node.val)) return map.get(node.val)
        let cloned = new Node(node.val, [])
        map.set(node.val, cloned)
        for (let item of node.neighbors) {
            cloned.neighbors.push(dfs(item))
        }
        return cloned
    }
}
