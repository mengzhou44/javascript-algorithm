/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function canFinish(numCourses, prerequisites) {
    let ranks = Array(numCourses).fill(0)
    let graph = Array.from(Array(numCourses), () => [])
    for (const [u, v] of prerequisites) {
        graph[v].push(u)
        ranks[u] = ranks[u] + 1
    }

    const queue = []
    ranks.forEach((rank, index) => {
        if (rank === 0) {
            queue.push(index)
        }
    })

    while (queue.length > 0) {
        const f = queue.shift()
        console.log(f)
        numCourses = numCourses - 1
        graph[f].forEach((neigh) => {
            ranks[neigh] = ranks[neigh] - 1
            if (ranks[neigh] === 0) {
                queue.push(neigh)
            }
        })
    }

    return numCourses === 0
}
