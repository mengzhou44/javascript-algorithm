function getPermutations(str) {
    if (str.length === 1) {
        return [str];
    }
    let last = str[str.length - 1];
    let previous = getPermutations(str.substring(0, str.length - 1));
    let result = [];
    for (let temp of previous) {
        createCombined(temp, last).map(item => result.push(item));
    }
    return result;
}

function createCombined(temp, letter) {
    console.log(temp, letter);
    let arr = [];
    for (let i = 0; i <= temp.length; i++) {
        let s = temp.slice(0, i) + letter + temp.slice(i);
        arr.push(s);
    }
    return arr;
}

console.log(getPermutations('abcd'));
