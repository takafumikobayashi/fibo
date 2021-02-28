function getByElementCount(cnt) {
    let fibonacci = new Array;
    let before_number2 = 0
    let before_number1 = 0

    if (Number.isFinite(cnt) === false) {
        return fibonacci
    } else if (Number(cnt) < 1) {
        fibonacci.push(0)
        return fibonacci
    } else if (Number(cnt) > 50) {
        cnt = 50
    }

    for (let i = 0 ; i <= Number(cnt) ; i++) {
        if (i === 0) {
            fibonacci.push(i);
        } else if (i === 1) {
            fibonacci.push(i);
            before_number2 = before_number1; 
            before_number1 = i;
        } else {
            let n = before_number2 + before_number1;
            fibonacci.push(n);
            before_number2 = before_number1; 
            before_number1 = n;
        };
    }
    return fibonacci
};

function getByIndexValue(index) {
    let fibonacci = new Array;
    let fibonacci_value = 0

    if (Number.isFinite(index) === false) {
        return fibonacci_value
    } else if (Number(index) < 1) {
        return fibonacci_value
    } else if (Number(index) > 50) {
        index = 50
    }

    fibonacci = getByElementCount(index)
    fibonacci_value = fibonacci[Number(index)]
    return fibonacci_value
}
export {getByElementCount, getByIndexValue};