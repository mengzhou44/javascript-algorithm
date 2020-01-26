function compress(str) {
    if (str.length === 1) {
        return str;
    }

    let arr = str.split('');

    let current = arr[0];
    let startIndex = 0;
    let  temp = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== current) {
            temp.push(current + (i - startIndex).toString());
            current = arr[i];
            startIndex = i;
        }
    }
    temp.push(current + (arr.length - startIndex).toString());
    const result = temp.join("")

    if (str.length < result.length) {
        return str;
    }

    return  result;
}

console.log(compress('aabcccccaaa'));
