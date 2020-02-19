function printBinary(num) {
    if (num >= 1 || num <= 0) {
        throw 'Error';
    }

    let result = ['.'];
    while (num > 0) {
       
        if (result.length >= 32) {
             break
        }
        let r = num * 2;
        if (r >= 1) {
            num = r - 1;
            result.push('1');
        } else {
            result.push('0');
            num = r;
        }
    }
    return result.join('');
}

//101000100
console.log(printBinary(0.324));
