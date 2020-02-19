function getBit(num, i) {
    return (num & (1 << i)) !== 0;
}

function setBit(num, i) {
    return num | (1 << i);
}

function clearBit(num, i) {
    const mask = ~(1 << i);
    return num & mask;
}


function insert(N, M, i, j) {
    for (let k = i; k < j; k++) {
        N = clearBit(N, k);
    }
  
    return N + (M<< i)
}

let result = insert(1024, 19, 2, 6);
console.log(result);
