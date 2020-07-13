function leastInterval(tasks, n) {
    if (n === 0) return tasks.length

    let array = []
    for (let task of tasks) {
        let found = array.find((item) => item.task === task)
        if (found === undefined) {
            array.push({ task, count: 1 })
        } else {
            found.count++
        }
    }

    array.sort((a, b) => b.count - a.count)
    let mostFrequentTasks = array.filter((item) => item.count >= array[0].count)
    let p = array[0].count

    let result = (n + 1) * (p - 1) + mostFrequentTasks.length

    return Math.max(result, tasks.length)
}
