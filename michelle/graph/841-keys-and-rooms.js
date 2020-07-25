 
*************

function canVisitAllRooms(rooms) {
    let graph = new Map()
    for (let i = 0; i < rooms.length; i++) {
        graph.set(i, rooms[i])
    }
    return dfs(0)

    function dfs(room, visited = new Set()) {
        visited.add(room)
        if (visited.size === rooms.length) {
            return true
        }
        for (let key of graph.get(room)) {
            if (!visited.has(key)) {
                if (dfs(key, visited)) {
                    return true
                }
            }
        }
        return false
    }
}
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
    let visited = []
    dfs(0)
   
    return visited.length === rooms.length   
  
    function dfs(room) {
        visited.push(room)
        let nextRoomsToVisit = rooms[room]
        for(let item of nextRoomsToVisit) {
            if (!visited.includes(item)){
                dfs(item)
            }
        }     
   }
}


