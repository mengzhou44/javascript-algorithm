function cloneGraph(node) {
    let map = new Map()

    function dfs(node, map) {
        if (node === null) return null

        if (map.has(node.val)) return map.get(node.val)

        let cloned = new Node(node.val)
        map.set(node.val, cloned)

        for (let item of node.neighbors) {
            cloned.neighbors.push(dfs(item, map))
        }

        return cloned
    }

    return dfs(node, map)
}
