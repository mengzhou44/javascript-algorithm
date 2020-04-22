function canVisitAllRooms(rooms) {
    let visited = new Array(rooms.length).fill(false)

    dfs(0, rooms)
    function dfs(current, rooms) {
        if (visited[current] === true) return
        visited[current] = true

        for (let room of rooms[current]) {
            dfs(room, rooms, visited)
        }
    }

    let temp = visited.filter((item) => item === true)

    return temp.length === rooms.length
}
