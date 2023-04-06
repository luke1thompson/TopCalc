let setNum = '';
let workingNum = '';
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, op, b) {
    let output;
    switch (op) {
        case '+':
            output = add(a, b);
            break;
        case '-':
            output = subtract(a, b);
            break;
        case '*':
            output = multiply(a, b);
            break;
        case '/':
            output = divide(a, b);
            break;
    }

    post(output);
}

function clear() {
    setNum = '';
    workingNum = '';
    post(setNum);
}