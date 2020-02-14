function pushDominoes(input) {
    let N = input.length
    let forces = Array(N).fill(0)
    let force = 0
    for (let i = 0; i < N; i++) {
        if (input[i] === 'R') {
            force = N
        } else if (input[i] === 'L') {
            force = 0
        } else if (input[i] === '.') {
            force = Math.max(force - 1, 0)
        }
        forces[i] += force
    }

    force = 0
    for (let i = N - 1; i >= 0; i--) {
        if (input[i] === 'L') {
            force = N
        } else if (input[i] === 'R') {
            force = 0
        } else if (input[i] === '.') {
            force = Math.max(force - 1, 0)
        }
        forces[i] -= force
    }

    let result = []
    for (let i = 0; i < N; i++) {
        if (forces[i] > 0) {
            result.push('R')
        } else if (forces[i] < 0) {
            result.push('L')
        } else {
            result.push('.')
        }
    }

    return result.join('')
}

console.log(pushDominoes('..R...L..R.'))
