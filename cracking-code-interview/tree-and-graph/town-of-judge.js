function findJudge(N, trust) {
    let counts = new Array(N + 1).fill(0);

    for (let [i, j] of trust) {
        counts[i] = counts[i] - 1;
        counts[j] = counts[j] + 1;
    }
    console.log(counts);
    for (let i = 1; i < counts.length; i++) {
        if (counts[i] === N - 1) {
            return i;
        }
    }
    return -1;
}
