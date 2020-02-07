function multiply(a, b) {
    let temp = convertToBinaryString(b).split('');
    let result = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === '1') {
            const shifts = temp.length - 1 - i;
            result = result + a << shifts;
        }
    }
    return result;
}

function convertToBinaryString(num) {
    return (num >>> 0).toString(2);
}

 
console.log(multiply(4, 7));
